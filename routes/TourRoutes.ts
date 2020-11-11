import { Router } from 'express';
const router = Router();

import getToursController from '../controllers/GetToursController';

router.get("/tours", getToursController.execute);

export default router;