import { Router } from 'express';
import { getWorkItems } from '../controllers/work-items.controller';

const router = Router();

/**
 * @swagger
 * /api/work-items:
 *   get:
 *     summary: Get work items from current sprint by email
 *     tags: [Work Items]
 *     description: Retrieves work items assigned to a specific user email in the current sprint from Azure DevOps
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email address of the user
 *         example: user@example.com
 *     responses:
 *       200:
 *         description: List of work items for the specified user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WorkItem'
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
router.get('/', getWorkItems);

export default router;