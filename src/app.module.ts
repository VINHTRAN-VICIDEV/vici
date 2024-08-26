import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  database_config,
  host_config,
  jwt_config,
} from './config/configuration.config';
import { MongooseModule } from '@nestjs/mongoose';
// import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
// import { User } from './shared/interfaces/user.interface';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        PORT: Joi.number(),
        DB_PORT: Joi.number(),
        DB_HOST: Joi.string(),
        DB_URI: Joi.string(),
        DB_NAME: Joi.string(),
      }),
      isGlobal: true,
      load: [host_config, database_config, jwt_config],
      cache: true,
      expandVariables: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI, { dbName: process.env.DB_NAME }),
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   url: process.env.DB_URI,
    //   database: process.env.DB_NAME,
    //   entities: [User],
    // }),
  ],
})
export class AppModule {}
