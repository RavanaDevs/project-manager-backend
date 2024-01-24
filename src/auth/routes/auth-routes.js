import express from 'express';

import { register } from '../controllers/register.js';
import { login } from '../controllers/login.js';

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login)

export default authRouter;
