import taskRouter from './task.routes.js';
import tagRouter from './tag.routes.js';
import checkRouter from './checkList.routes.js'
import express from 'express';
const router = express.Router();

router.use('/tasks', taskRouter);
router.use('/tags', tagRouter);
router.use('/checkList', checkRouter);

export default router;