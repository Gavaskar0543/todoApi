const express = require('express');
const router = express.Router();
const taskController = require('../../../controller/api/v1/tasks');

router.get('/tasks',taskController.allTask);
router.post('/newTask',taskController.newTodo);
router.delete('/destroy/:id',taskController.destroyTask);
router.put('/updateTask',taskController.updateTask);
module.export = router;