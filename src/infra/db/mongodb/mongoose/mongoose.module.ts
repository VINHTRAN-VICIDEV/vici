import { Module } from '@nestjs/common';
import { MongooseModule as MongooseModuleLib } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/mongoose.user.entity';
import { UserRepository } from 'src/application/ecommerce/repository/user.repository';
import { MongooseUserRepository } from './repositories/mongoose.user.repository';
import { ConfigService } from '@nestjs/config';

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
    ]),
  ],
  providers: [{ provide: UserRepository, useClass: MongooseUserRepository }],
  exports: [UserRepository],
})
export class MongooseModule {}
