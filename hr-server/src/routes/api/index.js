import express from 'express';
import usersRouter from './users';

var router = express.Router();

router.use('/users', usersRouter);

export default router;