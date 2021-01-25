import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTasksWithFilter(filterDTO: GetTasksFilterDTO): Task[] {        
        const { status, search } = filterDTO;
        let tasks = this.getAllTasks();        

        if(status) {
            tasks = tasks.filter(task => task.status === status);
        }
        if(search) {
            console.log("AMR");
            
            tasks = tasks.filter(task => 
                task.title.includes(search) || 
                task.description.includes(search),
            );
        }
        
        return tasks;
    }

    getTaskById(id: string): Task {
        const found = this.tasks.find(task => task.id === id);

        if(!found) {
            throw new NotFoundException(`Task with ID ${id} is not found!`);
        }

        return found;
    }

    createTask(createTaskDTO: CreateTaskDTO): Task {
        const { title, description } = createTaskDTO;
        const task: Task = {
            id: uuid.v1(),
            title,
            description,
            status: TaskStatus.OPEN,
        };

        this.tasks.push(task);
        return task;
    }

    updateTaskStatus(id: string, newStatus: TaskStatus): Task {
        const task = this.getTaskById(id);
        task.status = newStatus;
        return task;
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
