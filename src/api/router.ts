import express from 'express';
import { authRouter } from './auth';
import { tokenRouter } from './token';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/token', tokenRouter);

export default router;
