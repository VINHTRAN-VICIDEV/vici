import { Module } from '@nestjs/common';
import { MongooseModule as MongooseModuleLib } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/mongoose.user.entity';
import { UserRepository } from 'src/application/ecommerce/repository/user.repository';
import { MongooseUserRepository } from './repositories/mongoose.user.repository';
import { ConfigService } from '@nestjs/config';
import { ProductRepository } from 'src/application/ecommerce/repository/product.repository';
import { MongooseProductRepository } from './repositories/mongoose.product.repository';
import { MongoGenericRepository } from './repositories/mongoose.generic.repository';
import { Product, ProductSchema } from './entities/mongoose.product.entity';

@Module({
  imports: [
    MongooseModuleLib.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModuleLib.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  providers: [
    { provide: UserRepository, useClass: MongooseUserRepository },
    { provide: ProductRepository, useClass: MongooseProductRepository },
    MongoGenericRepository,
  ],
  exports: [UserRepository, ProductRepository],
})
export class MongooseModule {}
