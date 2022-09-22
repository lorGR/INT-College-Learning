import express from "express";
import { getMentor, getMentorByFilter, getMentors, getMyMentors, deleteMentor } from "./mentorCont"

const router = express.Router();

router
   .get('/get-mentor', getMentor)
   .get('/get-mentor-by-filter', getMentorByFilter)
   .get('/get-mentors', getMentors)
   .get('/get-my-mentors', getMyMentors)
   .delete('/delete-mentor', deleteMentor)
export default router;