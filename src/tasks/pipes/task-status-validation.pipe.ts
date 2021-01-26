import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.DONE
    ];

    transform(value: any, metadata: ArgumentMetadata) {
        value = value.toUpperCase();
        if(!this.isStatusValid(value)) {
            throw new BadRequestException(`Invalid status given!`);    
        }

        return value;
    }

    private isStatusValid(status: any) {
        return this.allowedStatuses.indexOf(status) !== -1;
    }
}