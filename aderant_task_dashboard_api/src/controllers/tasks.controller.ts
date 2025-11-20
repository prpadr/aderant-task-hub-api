import { Request, Response, NextFunction } from 'express';
import TaskService from '../services/task.service';

const taskService = new TaskService();

export const getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.query;
        
        if (!email || typeof email !== 'string') {
            return res.status(400).json({ error: 'Email query parameter is required' });
        }

        const tasks = await taskService.aggregateAllTasks(email);
        res.json(tasks);
    } catch (error) {
        next(error);
    }
};