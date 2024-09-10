import { Module } from '@nestjs/common';
import { MongooseModule as MongooseModuleLib } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/mongoose.user.entity';
import { MongooseUserRepository } from './repositories/mongoose.user.repository';
import { ConfigService } from '@nestjs/config';
import { MongooseProductRepository } from './repositories/mongoose.product.repository';
import { Product, ProductSchema } from './entities/mongoose.product.entity';
import { ProductRepositoryInterface } from 'src/application/ecommerce/repository/product.interface.repository';
import { UserRepositoryInterface } from 'src/application/ecommerce/repository/user.interface.repository';

@Module({
  imports: [
    MongooseModuleLib.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_URI'),
        dbName: configService.get<string>('DB_NAME'),
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
    { provide: UserRepositoryInterface, useClass: MongooseUserRepository },
    {
      provide: ProductRepositoryInterface,
      useClass: MongooseProductRepository,
    },
  ],
  exports: [UserRepositoryInterface, ProductRepositoryInterface],
})
export class MongooseModule {}
