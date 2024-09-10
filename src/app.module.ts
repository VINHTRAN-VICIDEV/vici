import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  brcypt_config,
  database_config,
  host_config,
  jwt_config,
} from './config/configuration.config';
// import { MongooseModule } from '@nestjs/mongoose';
// import { HttpModule } from './infra/http/http.module';
import { PersistenceModule } from './infra/db/persistence.module';
import { EcommerceModule } from './application/ecommerce/ecommerce.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [host_config, database_config, jwt_config, brcypt_config],
      cache: true,
      expandVariables: true,
    }),
    PersistenceModule.register({
      type: 'mongoose',
      global: true,
    }),
    EcommerceModule,
  ],
})
export class AppModule {}
