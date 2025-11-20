import { Router } from 'express';
import pullRequestsRoutes from './pull-requests.routes';
import workItemsRoutes from './work-items.routes';
import tasksRoutes from './tasks.routes';

const router = Router();

router.use('/pull-requests', pullRequestsRoutes);
router.use('/work-items', workItemsRoutes);
router.use('/tasks', tasksRoutes);

export default router;