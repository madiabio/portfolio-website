import 'dotenv/config';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, {
    bodyParser: false, // required for Better Auth
  });

  logger.log(`CORS origin: ${process.env.NEXT_PUBLIC_URL}`);

  const allowedOrigins = ['http://localhost:3000', process.env.NEXT_PUBLIC_URL];
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Madi Abio Portfolio')
    .setDescription(
      'My portfolio containing information and my leetcode statistics.',
    )
    .setVersion('0.0.2')
    .addTag('portfolio')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (_controllerKey, methodKey) => methodKey,
  });

  SwaggerModule.setup('api', app, document, {
    jsonDocumentUrl: 'api-json',
  });

  await app.listen(process.env.PORT ?? 3001);
  logger.log(`Listening on port ${process.env.PORT}`);
}
bootstrap();
