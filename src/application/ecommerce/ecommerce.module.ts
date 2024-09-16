import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { GraphQLModule } from 'src/infra/graphql/graphql.module';
import { HttpModule } from 'src/infra/http/http.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '3 days' },
      }),
      global: true,
      inject: [ConfigService],
    }),
    HttpModule,
    GraphQLModule,
  ],
  controllers: [],
  providers: [],
})
export class EcommerceModule {}
