import { Router } from 'express';
import { getWorkItems } from '../controllers/work-items.controller';

const router = Router();

/**
 * @swagger
 * /api/work-items:
 *   get:
 *     summary: Get work items from current sprint
 *     tags: [Work Items]
 *     description: Retrieves all work items assigned to the user in the current sprint from Azure DevOps
 *     responses:
 *       200:
 *         description: List of work items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WorkItem'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/', getWorkItems);

export default router;