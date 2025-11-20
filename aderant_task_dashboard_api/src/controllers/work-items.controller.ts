import { Request, Response, NextFunction } from 'express';
import AzureDevOpsService from '../services/azure-devops.service';

const adoService = new AzureDevOpsService();

export const getWorkItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.query;
        
        if (!email || typeof email !== 'string') {
            return res.status(400).json({ error: 'Email query parameter is required' });
        }

        console.log('📋 Fetching work items for email:', email);
        const workItems = await adoService.getCurrentSprintWorkItems(email);
        console.log('✅ Found', workItems.length, 'work items for', email);
        res.json(workItems);
    } catch (error) {
        console.error('❌ Error fetching work items:', error);
        next(error);
    }
};