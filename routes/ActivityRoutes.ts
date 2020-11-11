import { Router } from 'express';
const router = Router();

import getActivitiesController from '../controllers/activities/GetActivitiesController';
import getActivityController from '../controllers/activities/GetActivityController';
import createActivityController from '../controllers/activities/CreateActivityController';

router.get("/", getActivitiesController.execute);
router.get("/:activityId", getActivityController.execute);
router.post("/", createActivityController.execute);


export default router;