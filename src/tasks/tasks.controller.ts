// tasks.controller.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getHello(): string {
    return 'Welcome to the NestJS Task Tracker!';
  }

  // @UseGuards(JwtAuthGuard)
  @Get('/tasks')
  async getTasks() {
    return this.tasksService.findAll();
  }

  // @UseGuards(JwtAuthGuard)
  @Post('/tasks')
  async addTask(@Body() task: any) {
    return this.tasksService.create(task);
  }
}
