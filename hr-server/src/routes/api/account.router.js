import express from 'express';
import controller from '../../controllers/account.controller'

var router = express.Router();

router.route('/')
    .get(controller.findAll)
    .post(controller.add)


export default router;