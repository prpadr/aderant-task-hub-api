export class PullRequest {
    id: number;
    title: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
    state: string;
    user: {
        login: string;
        avatarUrl: string;
    };
    assignee: {
        login: string;
        avatarUrl: string;
    } | null;

    constructor(id: number, title: string, url: string, createdAt: Date, updatedAt: Date, state: string, user: { login: string; avatarUrl: string }, assignee: { login: string; avatarUrl: string } | null) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.state = state;
        this.user = user;
        this.assignee = assignee;
    }
}