import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error('Error:', error);

    res.status(500).json({
        error: error.message || 'Internal server error',
        timestamp: new Date().toISOString(),
    });
};

export default errorMiddleware;