import { Repository } from "typeorm";
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
export declare class TaskRepository extends Repository<Task> {
    createTask(taskDTO: CreateTaskDTO): Promise<Task>;
}
