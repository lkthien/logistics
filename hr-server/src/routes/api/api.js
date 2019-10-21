import express from 'express';
import usersRouter from './user';

var router = express.Router();

router.use('/users', usersRouter);

export default router;