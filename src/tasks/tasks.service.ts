import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) {}
    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // getTasksWithFilter(filterDTO: GetTasksFilterDTO): Task[] {        
    //     const { status, search } = filterDTO;
    //     let tasks = this.getAllTasks();        

    //     if(status) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }
    //     if(search) {            
    //         tasks = tasks.filter(task => 
    //             task.title.includes(search) || 
    //             task.description.includes(search),
    //         );
    //     }
        
    //     return tasks;
    // }

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if(!found) {
            throw new NotFoundException(`Task with ID ${id} is not found!`);
        }

        return found;
    }

    async createTask(taskDTO: CreateTaskDTO): Promise<Task> {
        return this.taskRepository.createTask(taskDTO);
    }

    // updateTaskStatus(id: string, newStatus: TaskStatus): Task {
    //     const task: Task = this.getTaskById(id);
    //     task.status = newStatus;
    //     return task;
    // }

    // deleteTask(id: string): void {
    //     const found: Task = this.getTaskById(id);
    //     this.tasks = this.tasks.filter(task => task.id !== found.id);
    // }
}
