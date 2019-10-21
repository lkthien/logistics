import express from 'express';
import UserController from '../../controllers/user'

var router = express.Router();

router.get('/', UserController.index)

export default router;
