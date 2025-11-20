import dotenv from 'dotenv';

dotenv.config();

// Helper function to remove surrounding quotes from environment variables
const stripQuotes = (value: string | undefined): string => {
    if (!value) return '';
    return value.replace(/^['"]|['"]$/g, '');
};

export default {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3006,
    github: {
        token: stripQuotes(process.env.GITHUB_TOKEN),
        username: stripQuotes(process.env.GITHUB_USERNAME),
    },
    azureDevOps: {
        organization: stripQuotes(process.env.AZURE_DEVOPS_ORG),
        pat: stripQuotes(process.env.AZURE_DEVOPS_PAT),
        project: stripQuotes(process.env.AZURE_DEVOPS_PROJECT),
    },
};