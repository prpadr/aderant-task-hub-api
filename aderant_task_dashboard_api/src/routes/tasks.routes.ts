import { Router } from 'express';
import { getAllTasks } from '../controllers/tasks.controller';

const router = Router();

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all aggregated tasks for a user
 *     tags: [Tasks]
 *     description: Retrieves all tasks from both GitHub (pull requests) and Azure DevOps (work items) for a specific user by their email address
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email address of the user to fetch tasks for
 *         example: user@example.com
 *     responses:
 *       200:
 *         description: Combined list of all tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
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
router.get('/', getAllTasks);

export default router;