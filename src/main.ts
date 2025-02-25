import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { formatearErroresValidacion } from './utils/formatear-errores-validacion';

async function bootstrap() {

  const puerto = 3000;

  const app = await NestFactory.create(AppModule, {

  });

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      exceptionFactory: errors => {
        const mensajeValidaciones = formatearErroresValidacion(errors);
        return new BadRequestException(mensajeValidaciones);
      }
    })
  );

  const config = new DocumentBuilder()
    .setTitle('contactos-API')
    .setDescription('API del sistema de informacion')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacion', app, document);

  await app.listen(puerto);
  Logger.log(`contactos-api corriendo satisfactoriamente en el puerto ${puerto}`);
}
bootstrap();

