import axios from 'axios';
import config from '../config';
import { WorkItem } from '../types';

class AzureDevOpsService {
    private baseUrl: string;
    private headers: Record<string, string>;

    constructor() {
        this.baseUrl = `https://dev.azure.com/${config.azureDevOps.organization}/${config.azureDevOps.project}/_apis`;
        this.headers = {
            'Content-Type': 'application/json',
            Authorization: `Basic ${Buffer.from(`:${config.azureDevOps.pat}`).toString('base64')}`,
        };
    }

    async getCurrentSprintWorkItems(): Promise<WorkItem[]> {
        try {
            console.log('🔍 Azure DevOps Organization:', config.azureDevOps.organization);
            console.log('🔍 Azure DevOps Project:', config.azureDevOps.project);
            console.log('🔍 Azure DevOps PAT:', config.azureDevOps.pat ? '✓ Set' : '✗ Not Set');
            
            // Query work items using @CurrentIteration
            const wiqlQuery = {
                query: `SELECT [System.Id], [System.Title], [System.AssignedTo], [System.State], [System.WorkItemType]
                        FROM WorkItems
                        WHERE ([System.WorkItemType] = 'Task' 
                            OR [System.WorkItemType] = 'User Story' 
                            OR [System.WorkItemType] = 'Bug')
                        AND [System.State] <> 'Closed'
                        AND [System.IterationPath] UNDER @CurrentIteration
                        AND [System.AssignedTo] = @Me
                        ORDER BY [System.ChangedDate] DESC`,
            };
            
            console.log('🔍 WIQL Query:', wiqlQuery.query);

            const queryResponse = await axios.post(`${this.baseUrl}/wit/wiql?api-version=7.0`, wiqlQuery, {
                headers: this.headers,
            });

            const workItemIds = queryResponse.data.workItems.map((wi: any) => wi.id);
            console.log('✅ Found', workItemIds.length, 'work item IDs:', workItemIds);

            if (workItemIds.length === 0) {
                console.log('⚠️ No work items found in current sprint');
                return [];
                return [];
            }

            // Get work item details
            const detailsResponse = await axios.get(
                `${this.baseUrl}/wit/workitems?ids=${workItemIds.join(',')}&api-version=7.0`,
                { headers: this.headers }
            );

            return detailsResponse.data.value.map((wi: any) => ({
                id: wi.id,
                title: wi.fields['System.Title'],
                state: wi.fields['System.State'],
                type: wi.fields['System.WorkItemType'],
                url: wi._links?.html?.href || `https://dev.azure.com/${config.azureDevOps.organization}/${config.azureDevOps.project}/_workitems/edit/${wi.id}`,
                assignedTo: wi.fields['System.AssignedTo']?.displayName,
            }));
        } catch (error: any) {
            console.error('❌ Error fetching Azure DevOps work items:');
            console.error('Error Message:', error.message);
            console.error('Error Response:', error.response?.data);
            console.error('Status Code:', error.response?.status);
            console.error('Full Error:', JSON.stringify(error, null, 2));
            throw new Error('Failed to fetch Azure DevOps work items: ' + (error.response?.data?.message || error.message));
        }
    }
}

export default AzureDevOpsService;