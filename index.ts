import express from 'express';
import cors from 'cors';

import authRoutes from './routes/AuthRoutes';
import tourRoutes from './routes/TourRoutes';
import categoryRoutes from './routes/CategoryRoutes';

const app = express();
const PORT = 3000;
const API_VERSION = "/v1";

const corsOptions = {
  origin: ["http://localhost:8080", "http://relieve.com:8080"]
}
app.use(cors(corsOptions));

app.use(API_VERSION, authRoutes);
app.use(API_VERSION, tourRoutes);
app.use(API_VERSION, categoryRoutes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});