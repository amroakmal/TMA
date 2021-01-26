import { EntityRepository, Repository } from "typeorm";
import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    async createTask(taskDTO: CreateTaskDTO): Promise<Task> {
        const { title, description } = taskDTO;
        const newTask = new Task();

        newTask.title = title;
        newTask.description = description;
        newTask.status = TaskStatus.OPEN;
        
        await newTask.save()
        
        return newTask;
    }
}