import GitHubService from './github.service';
import AzureDevOpsService from './azure-devops.service';
import { Task } from '../types';

class TaskService {
    private githubService: GitHubService;
    private adoService: AzureDevOpsService;

    constructor() {
        this.githubService = new GitHubService();
        this.adoService = new AzureDevOpsService();
    }

    async aggregateAllTasks(userEmail: string): Promise<Task[]> {
        try {
            const [pullRequests, workItems] = await Promise.all([
                this.githubService.getAssignedPullRequests(userEmail),
                this.adoService.getCurrentSprintWorkItems(userEmail),
            ]);

            const tasks: Task[] = [
                ...pullRequests.map(pr => ({
                    id: `gh-${pr.id}`,
                    title: pr.title,
                    source: 'GitHub' as const,
                    url: pr.html_url,
                    status: pr.state,
                    type: 'Pull Request',
                })),
                ...workItems.map(wi => ({
                    id: `ado-${wi.id}`,
                    title: wi.title,
                    source: 'Azure DevOps' as const,
                    url: wi.url,
                    status: wi.state,
                    type: wi.type,
                })),
            ];

            return tasks;
        } catch (error: any) {
            console.error('Error aggregating tasks:', error);
            throw new Error('Failed to aggregate tasks');
        }
    }
}

export default TaskService;