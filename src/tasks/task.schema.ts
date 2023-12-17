// tasks/task.schema.ts
import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: String, // Link tasks to users (you might have a User schema)
});
