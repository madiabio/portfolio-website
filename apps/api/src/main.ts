import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Madi Abio Portfolio')
    .setDescription(
      'My portfolio containing information and my leetcode statistics.',
    )
    .setVersion('0.0.1')
    .addTag('portfolio')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (_controllerKey, methodKey) => methodKey,
  });

  SwaggerModule.setup('api', app, document, {
    jsonDocumentUrl: 'api-json',
  });

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
