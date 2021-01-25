import { Task } from './task.model';
import { CreateTaskDTO } from './dto/create-task.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    createTask(createTaskDTO: CreateTaskDTO): Task;
}
