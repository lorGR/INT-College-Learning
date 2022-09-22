import express from 'express';
// import { login, sendRequestMentor, addUser, getUser } from './usersCont';
import { addUser } from './usersCont';

const router = express.Router()

router
  // .post('/request-mentor/:id', sendRequestMentor)
  // .post('/login',login)
  .post('/add-user', addUser)
  // .post('/mentor-status-request', statusChangeRequest)
  // .get('/get-user', getUser)

export default router;