import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { Task } from './task.entity';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTaskById(id: number): Promise<Task>;
    createTask(createTaskDTO: CreateTaskDTO): Promise<Task>;
}
