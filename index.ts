import express from 'express';

import authRoutes from './routes/AuthRoutes';
import tourRoutes from './routes/ActivityRoutes';
import categoryRoutes from './routes/CategoryRoutes';

import { setupCors } from './loaders/corsSetup';
import { setupRoutes } from './loaders/routesSetup';

const app = express();
const PORT = 3000;

setupCors(app);
setupRoutes(app);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});