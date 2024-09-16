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
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [host_config, database_config, jwt_config, brcypt_config],
      expandVariables: true,
    }),
    PersistenceModule.register({
      type: 'typeorm',
      global: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),

    EcommerceModule,
  ],
})
export class AppModule {}
