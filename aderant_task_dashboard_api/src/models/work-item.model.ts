export class WorkItem {
    id: number;
    title: string;
    description: string;
    assignedTo: string;
    status: string;
    createdDate: Date;
    updatedDate: Date;

    constructor(id: number, title: string, description: string, assignedTo: string, status: string, createdDate: Date, updatedDate: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.assignedTo = assignedTo;
        this.status = status;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
    }
}