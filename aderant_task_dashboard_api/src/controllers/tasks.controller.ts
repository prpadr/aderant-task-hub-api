import { Request, Response, NextFunction } from 'express';
import TaskService from '../services/task.service';

const taskService = new TaskService();

export const getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const tasks = await taskService.aggregateAllTasks();
        res.json(tasks);
    } catch (error) {
        next(error);
    }
};