import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTasks(filterDTO: GetTasksFilterDTO): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    createTask(taskDTO: CreateTaskDTO): Promise<Task>;
    deleteTask(id: number): Promise<void>;
    updateTaskStatus(id: number, newStatus: TaskStatus): Promise<Task>;
}
