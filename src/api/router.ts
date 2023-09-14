import express from 'express';
import { authRouter } from './auth';
import { tokenRouter } from './token';
import { userRouter } from './user';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/token', tokenRouter);
router.use('/user', userRouter);

export default router;
