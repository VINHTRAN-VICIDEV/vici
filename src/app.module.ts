import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { database_config, host_config } from './config/configuration.config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        PORT: Joi.number(),
        DB_PORT: Joi.number(),
        DB_HOST: Joi.string(),
        DB_URI: Joi.string(),
        DB_NAME: Joi.string(),
      }),
      isGlobal: true,
      load: [host_config, database_config],
      cache: true,
      expandVariables: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI, { dbName: process.env.DB_NAME }),
  ],
})
export class AppModule {}
