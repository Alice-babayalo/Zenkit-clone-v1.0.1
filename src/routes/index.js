import taskRouter from './task.routes.js';
import tagRouter from './tag.routes.js';
import checkRouter from './checkList.routes.js'
import express from 'express';
import userRouter from './user.routes.js';
import tokenRouter from './authToken.routes.js';

const router = express.Router();

router.use('/tasks', taskRouter);
router.use('/tags', tagRouter);
router.use('/user', userRouter);

export default router;