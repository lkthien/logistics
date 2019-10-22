import express from 'express';
import controller from '../../controllers/account.controller'

var router = express.Router();

router.route('/')
    .get(controller.findAll)
    .post(controller.add)

router.route('/:id')
    .get(controller.findById)
    .put(controller.update)
    .delete(controller.delete)

// router.get('/', controller.findAll)
// router.post('/', controller.add)

// router.get('/:id', controller.findById)
// router.put('/:id', controller.update)
// router.delete('/:id', controller.delete)

export default router;