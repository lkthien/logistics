import express from 'express';
import accountsRouter from './account.router';

var router = express.Router()

router.use('/accounts', accountsRouter)
export default router;