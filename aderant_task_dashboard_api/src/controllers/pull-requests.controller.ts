import { Request, Response, NextFunction } from 'express';
import GitHubService from '../services/github.service';

const githubService = new GitHubService();

export const getPullRequests = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.query;
        
        if (!email || typeof email !== 'string') {
            return res.status(400).json({ error: 'Email query parameter is required' });
        }
        
        const pullRequests = await githubService.getAssignedPullRequests(email);
        res.json(pullRequests);
    } catch (error) {
        next(error);
    }
};

export const getGithubUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.query;
        
        if (!email || typeof email !== 'string') {
            return res.status(400).json({ error: 'Email query parameter is required' });
        }

        const username = await githubService.getUsernameByEmail(email);
        
        if (!username) {
            return res.status(404).json({ error: 'GitHub username not found for the provided email' });
        }

        res.json({ email, username });
    } catch (error) {
        next(error);
    }
};