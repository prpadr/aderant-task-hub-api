import { Request, Response, NextFunction } from 'express';
import GitHubService from '../services/github.service';

const githubService = new GitHubService();

export const getPullRequests = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const pullRequests = await githubService.getAssignedPullRequests();
        res.json(pullRequests);
    } catch (error) {
        next(error);
    }
};