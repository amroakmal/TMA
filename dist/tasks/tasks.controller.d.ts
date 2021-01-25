import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDTO: GetTasksFilterDTO): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDTO: CreateTaskDTO): Task;
    updateTaskStatus(id: string, status: TaskStatus): Task;
    deleteTask(id: string): void;
}
