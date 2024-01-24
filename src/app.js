import express from 'express';

import homeRouter from './routes/home.js';
import projectRouter from './routes/project.js';
import authRouter from './auth/routes/auth-routes.js';

const app = express();

app.use(express.json());

app.use('/', homeRouter);
app.use('/auth', authRouter);
app.use('/projects', projectRouter);

export default app;
