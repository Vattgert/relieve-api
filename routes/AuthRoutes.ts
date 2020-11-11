import express from 'express';
const router = express.Router();

import loginController from '../controllers/LoginController';

router.get("/login", loginController.execute);

export default router;