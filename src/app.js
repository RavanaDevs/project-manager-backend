import express from 'express';

import homeRouter from './routes/home.js';
import authRouter from './auth/routes/auth-routes.js';

const app = express();

app.use(express.json());

app.use('/', homeRouter);
app.use('/auth', authRouter);

export default app;
