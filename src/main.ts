// main.ts
// noinspection JSIgnoredPromiseFromCall
// noinspection JSIgnoredPromiseFromCall

import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as passport from 'passport';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(passport.initialize());
  //app.useGlobalPipes(new ValidationPipe());
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  app.useLogger(new Logger('global', { level: 'debug' }));

  await app.listen(3000);
}
bootstrap();
