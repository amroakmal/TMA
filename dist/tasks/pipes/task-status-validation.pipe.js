"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const task_status_enum_1 = require("../task-status.enum");
class TaskStatusValidationPipe {
    constructor() {
        this.allowedStatuses = [
            task_status_enum_1.TaskStatus.DONE, task_status_enum_1.TaskStatus.IN_PROGRESS, task_status_enum_1.TaskStatus.DONE
        ];
    }
    transform(value, metadata) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new common_1.BadRequestException(`Invalid status given!`);
        }
        return value;
    }
    isStatusValid(status) {
        return this.allowedStatuses.indexOf(status) !== -1;
    }
}
exports.TaskStatusValidationPipe = TaskStatusValidationPipe;
//# sourceMappingURL=task-status-validation.pipe.js.map