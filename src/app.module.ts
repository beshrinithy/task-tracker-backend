// app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard'; // Import your JwtAuthGuard

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Shrinithybe:cpH69vt6tnKWCur8@cluster0.o0qhiiv.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Apply JwtAuthGuard globally
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ], //
})
export class AppModule {}
