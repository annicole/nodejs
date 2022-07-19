import { Router} from "express";

import * as taskcontroller from "../controllers/task.controller"

const router= Router();

router.get('/tasks',taskcontroller.finAllTask);

router.post('/tasks',taskcontroller.createTask)
router.get('/tasks/done',taskcontroller.findAlldoneTask);

router.get('/tasks/:id',taskcontroller.findOneTask);

router.delete('/tasks/:id',taskcontroller.deleteTask);

router.put('/tasks/:id',taskcontroller.updateTask);


export default router;
