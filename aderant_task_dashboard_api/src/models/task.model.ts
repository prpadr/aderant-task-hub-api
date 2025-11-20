export class Task {
    id: string;
    title: string;
    description: string;
    assignedTo: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate?: Date;

    constructor(id: string, title: string, description: string, assignedTo: string, status: 'pending' | 'in-progress' | 'completed', dueDate?: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.assignedTo = assignedTo;
        this.status = status;
        this.dueDate = dueDate;
    }
}