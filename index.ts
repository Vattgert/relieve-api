import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();

import './database/TypeORMConnection';

import express from 'express';

import { setupCors } from './loaders/corsSetup';
import { setupRoutes } from './loaders/routesSetup';

const app = express();
const PORT = 3000;

setupCors(app);
setupRoutes(app);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});