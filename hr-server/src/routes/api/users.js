import express from 'express';
import UserService from '../../service/UserServices';
import User from '../../model/User';

var router = express.Router();

var service = new UserService();

router.get('/', function(req, res, next) {
  res.status(200).send({
      success: 'true',
      message: 'Retrieved successfully',
      data: service.getAll()
    })
})

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10)
  res.status(200).send({
    success: true,
    message: 'Retrieved successfully',
    data: service.getBy(id)
  })
})

router.post('/', (req, res, next) => {
  service.add(User.create(req.body))
  
  res.status(200).send({
    success: true,
    message: 'Retrieved successfully',
    data: service.getAll()
  })
})

router.delete('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10)
  service.delete(id)
  res.status(200).send({
    success: true,
    message: 'Retrieved successfully',
    data: service.getAll()
  })
})

export default router;
