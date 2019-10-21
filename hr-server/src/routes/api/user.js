import express from 'express';
import UserController from '../../controllers/user'

var router = express.Router();

// router.get('/', UserController.index)
router.route('/').get(UserController.index)
                .post(UserController.add)  


export default router;
