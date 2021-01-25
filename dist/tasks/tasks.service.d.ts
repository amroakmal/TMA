import { Task, TaskStatus } from './task.model';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTasksWithFilter(filterDTO: GetTasksFilterDTO): Task[];
    getTaskById(id: string): Task;
    createTask(createTaskDTO: CreateTaskDTO): Task;
    updateTaskStatus(id: string, newStatus: TaskStatus): Task;
    deleteTask(id: string): void;
}
