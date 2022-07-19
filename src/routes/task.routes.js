import { Router} from "express";

import * as taskcontroller from "../controllers/task.controller"

const router= Router();

router.get('/tasks',taskcontroller.finAllTask);

router.post('/tasks',taskcontroller.createTask)

export default router;
