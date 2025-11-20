import { Router } from 'express';
import { getPullRequests, getGithubUsername } from '../controllers/pull-requests.controller';

const router = Router();

/**
 * @swagger
 * /api/pull-requests:
 *   get:
 *     summary: Get all pull requests assigned to a user
 *     tags: [Pull Requests]
 *     description: Retrieves all open pull requests from GitHub for a specific user by their email address
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email address of the user to fetch PRs for
 *         example: user@example.com
 *     responses:
 *       200:
 *         description: List of pull requests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PullRequest'
 *       400:
 *         description: Bad request - email parameter missing
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Email query parameter is required
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', getPullRequests);

/**
 * @swagger
 * /api/pull-requests/username:
 *   get:
 *     summary: Get GitHub username by email
 *     tags: [Pull Requests]
 *     description: Retrieves the GitHub username associated with a given email address
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email address to search for
 *         example: user@example.com
 *     responses:
 *       200:
 *         description: GitHub username found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: user@example.com
 *                 username:
 *                   type: string
 *                   example: octocat
 *       400:
 *         description: Bad request - email parameter missing
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Email query parameter is required
 *       404:
 *         description: GitHub username not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: GitHub username not found for the provided email
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/username', getGithubUsername);

export default router;