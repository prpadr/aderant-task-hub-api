export interface PullRequest {
    id: number;
    title: string;
    html_url: string;
    repository: string;
    created_at: string;
    updated_at: string;
    state: string;
}

export interface WorkItem {
    id: number;
    title: string;
    state: string;
    type: string;
    url: string;
    assignedTo?: string;
}

export interface Task {
    id: string;
    title: string;
    source: 'GitHub' | 'Azure DevOps';
    url: string;
    status: string;
    type: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
}