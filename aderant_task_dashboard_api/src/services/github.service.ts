import { Octokit } from '@octokit/rest';
import config from '../config';
import { PullRequest } from '../types';

class GitHubService {
    private octokit: Octokit;

    constructor() {
        this.octokit = new Octokit({
            auth: config.github.token,
        });
    }

    async getAssignedPullRequests(): Promise<PullRequest[]> {
        try {
            console.log('🔍 GitHub Username:', config.github.username);
            console.log('🔍 GitHub Token:', config.github.token ? '✓ Set' : '✗ Not Set');
            console.log('🔍 Token length:', config.github.token.length);
            console.log('🔍 Token first 15 chars:', config.github.token.substring(0, 15));
            console.log('🔍 Token last 10 chars:', config.github.token.substring(config.github.token.length - 10));
            
            // Search for PRs where user is assigned, author, or review-requested
            const queries = [
                `is:pr is:open assignee:${config.github.username}`,
                `is:pr is:open author:${config.github.username}`,
                `is:pr is:open review-requested:${config.github.username}`,
            ];
            
            console.log('🔍 Search Queries:', queries);
            
            const allPRs = new Map<number, any>(); // Use Map to deduplicate by PR id
            
            for (const query of queries) {
                const { data } = await this.octokit.search.issuesAndPullRequests({
                    q: query,
                    sort: 'updated',
                    order: 'desc',
                });
                
                console.log(`✅ Query "${query}" found ${data.total_count} PRs`);
                
                data.items.forEach(pr => {
                    if (!allPRs.has(pr.id)) {
                        allPRs.set(pr.id, pr);
                    }
                });
            }

            console.log('✅ Total unique pull requests:', allPRs.size);
            
            return Array.from(allPRs.values()).map(pr => ({
                id: pr.id,
                title: pr.title,
                html_url: pr.html_url,
                repository: pr.repository_url.split('/').slice(-2).join('/'),
                created_at: pr.created_at,
                updated_at: pr.updated_at,
                state: pr.state,
            }));
        } catch (error: any) {
            console.error('❌ Error fetching GitHub PRs:');
            console.error('Error Message:', error.message);
            console.error('Error Status:', error.status);
            console.error('Error Response:', error.response?.data);
            console.error('Full Error:', JSON.stringify(error, null, 2));
            throw new Error('Failed to fetch GitHub pull requests: ' + error.message);
        }
    }
}

export default GitHubService;