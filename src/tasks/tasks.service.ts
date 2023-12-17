// tasks.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<any>) {}

  async findAll(): Promise<any[]> {
    return this.taskModel.find().exec();
  }

  async create(task: any): Promise<any> {
    const createdTask = new this.taskModel(task);
    return createdTask.save();
  }
}
