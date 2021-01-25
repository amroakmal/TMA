import { TasksService } from '../tasks.service';
import { TaskStatus } from '../task.model';

export class GetTasksFilterDTO {
    status: TaskStatus;
    search: string;
}