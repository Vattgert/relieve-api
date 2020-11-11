import { Router } from 'express';
const router = Router();

import getTopCategoriesController from '../controllers/categories/GetTopCategoriesController';

router.get("/categories/top", getTopCategoriesController.execute);

export default router;