import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();

import config from './config';
const { db, app } = config;

import connection from './database/TypeORMConnection';
connection.create(db);

import express from 'express';
import { routers } from './di/compositionRoot';
import { setupCors } from './loaders/corsSetup';
import { setupRoutes } from './loaders/routesSetup';

const relieveApplication = express();

setupCors(relieveApplication);
setupRoutes(relieveApplication, routers);

relieveApplication.listen(app.port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${app.port}`);
});