import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const config = new DocumentBuilder()
    .setTitle('Authenticate')
    .setDescription('The authenticate API description')
    .setVersion('1.0')
    .addTag('auth')
    .addBearerAuth()
    .addOAuth2()
    .build();
  console.log(process.env.DB_URI);

  const document = SwaggerModule.createDocument(app, config);
  app.useGlobalPipes(new ValidationPipe({}));
  SwaggerModule.setup('docs', app, document);

  app.use(morgan('tiny'));

  await app.listen(configService.get<number>('port'));
}
bootstrap();
