// tasks/tasks.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskSchema } from './task.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
    JwtModule.register({
      secret:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InNocmluaXRoeSIsImlhdCI6MTUxNjIzOTAyMn0.3gSMle7qPMI54mH4xjQbV3MvDzLbWF3jO2178cWu-yU',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
