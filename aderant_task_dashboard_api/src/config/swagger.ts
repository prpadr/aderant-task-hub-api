import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Aggregator API',
            version: '1.0.0',
            description: 'API for aggregating tasks from GitHub Pull Requests and Azure DevOps Work Items',
            contact: {
                name: 'API Support',
            },
        },
        servers: [
            {
                url: 'http://localhost:3001',
                description: 'Development server',
            },
        ],
        components: {
            schemas: {
                PullRequest: {
                    type: 'object',
                    properties: {
                        id: { type: 'number', example: 123456 },
                        title: { type: 'string', example: 'Fix: Update user authentication' },
                        html_url: { type: 'string', example: 'https://github.com/owner/repo/pull/123' },
                        repository: { type: 'string', example: 'owner/repo' },
                        created_at: { type: 'string', format: 'date-time' },
                        updated_at: { type: 'string', format: 'date-time' },
                        state: { type: 'string', example: 'open' },
                    },
                },
                WorkItem: {
                    type: 'object',
                    properties: {
                        id: { type: 'number', example: 12345 },
                        title: { type: 'string', example: 'Implement new feature' },
                        state: { type: 'string', example: 'Active' },
                        type: { type: 'string', example: 'Task' },
                        url: { type: 'string', example: 'https://dev.azure.com/org/project/_workitems/edit/12345' },
                        assignedTo: { type: 'string', example: 'John Doe' },
                    },
                },
                Task: {
                    type: 'object',
                    properties: {
                        id: { type: 'string', example: 'gh-123456' },
                        title: { type: 'string', example: 'Fix bug in login' },
                        source: { type: 'string', enum: ['GitHub', 'Azure DevOps'], example: 'GitHub' },
                        url: { type: 'string', example: 'https://github.com/owner/repo/pull/123' },
                        status: { type: 'string', example: 'open' },
                        type: { type: 'string', example: 'Pull Request' },
                    },
                },
                Error: {
                    type: 'object',
                    properties: {
                        error: { type: 'string', example: 'Internal server error' },
                        timestamp: { type: 'string', format: 'date-time' },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.ts'], // Path to the API routes
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
