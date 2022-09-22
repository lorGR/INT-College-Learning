import express from 'express';
const router = express.Router();

import {getMentees, getMentee, getMenteesByFilter, getMyMentees, removeMentee} from './menteesCont';

router.get('/get-mentees', getMentee)
      .get('/get-mentee', getMentee)
      .get('/get-mentees-by-filter', getMenteesByFilter)
      .get('/get-my-mentees', getMyMentees)
      .delete('/remove-mentee', removeMentee)



export default router;