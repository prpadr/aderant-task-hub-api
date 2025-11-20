import { Request, Response, NextFunction } from 'express';
import AzureDevOpsService from '../services/azure-devops.service';

const adoService = new AzureDevOpsService();

export const getWorkItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('📋 Fetching work items from Azure DevOps...');
        const workItems = await adoService.getCurrentSprintWorkItems();
        console.log('✅ Found', workItems.length, 'work items');
        res.json(workItems);
    } catch (error) {
        console.error('❌ Error fetching work items:', error);
        next(error);
    }
};