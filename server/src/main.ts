import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appName = process.env.APP_NAME;
  const config = new DocumentBuilder()
    .setTitle(appName)
    .setDescription(`The ${appName} API description`)
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT;
  if (port) {
    Logger.log(`Running Server on port: ${port}`);
    await app.listen(port);
  }
}
bootstrap();
