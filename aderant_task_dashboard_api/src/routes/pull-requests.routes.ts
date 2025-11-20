import { Router } from 'express';
import { getPullRequests } from '../controllers/pull-requests.controller';

const router = Router();

/**
 * @swagger
 * /api/pull-requests:
 *   get:
 *     summary: Get all pull requests assigned to the authenticated user
 *     tags: [Pull Requests]
 *     description: Retrieves all open pull requests from GitHub assigned to the user
 *     responses:
 *       200:
 *         description: List of pull requests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PullRequest'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', getPullRequests);

export default router;