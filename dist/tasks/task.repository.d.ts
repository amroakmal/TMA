import { Repository } from "typeorm";
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
export declare class TaskRepository extends Repository<Task> {
    getTasks(filterDTO: GetTasksFilterDTO): Promise<Task[]>;
    createTask(taskDTO: CreateTaskDTO): Promise<Task>;
}
