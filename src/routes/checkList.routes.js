import {test, addCheck, updateCheck, deleteCheck, getCheckList} from '../controllers/checklist.controllers.js'

import express from 'express';

const checkRouter= express.Router();

checkRouter.get('/test', test);
checkRouter.get('/list', getCheckList);
checkRouter.post('/add', addCheck);
checkRouter.put('/update', updateCheck);
checkRouter.delete('/delete', deleteCheck);


export default checkRouter;