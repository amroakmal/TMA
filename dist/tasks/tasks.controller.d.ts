import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDTO: GetTasksFilterDTO): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    createTask(createTaskDTO: CreateTaskDTO): Promise<Task>;
    deleteTask(id: number): Promise<void>;
    updateTaskStatus(id: number, status: TaskStatus): Promise<Task>;
}
