import { Router } from 'express';
import { getAllTasks } from '../controllers/tasks.controller';

const router = Router();

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all aggregated tasks
 *     tags: [Tasks]
 *     description: Retrieves all tasks from both GitHub (pull requests) and Azure DevOps (work items)
 *     responses:
 *       200:
 *         description: Combined list of all tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', getAllTasks);

export default router;