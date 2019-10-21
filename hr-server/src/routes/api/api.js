import express from 'express';
import usersRouter from './user';
import accountsRouter from './account.router';

var router = express.Router()

router.use('/users', usersRouter)
router.use('/accounts', accountsRouter)
export default router;