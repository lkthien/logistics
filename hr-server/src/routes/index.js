import express from 'express';
import apiRouter from './api/api';

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/api', apiRouter);

export default router;
