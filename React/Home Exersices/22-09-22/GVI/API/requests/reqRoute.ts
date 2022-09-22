import express from 'express';
import { getRequest, sendRequest, getPendingRequests, getMyRequests } from './reqCont';

const router = express.Router();

router
.post('/sendRequest', sendRequest)
.post('/getRequestMentee', getRequest)
.post('/getMyRequests', getMyRequests)
.post('/getPendingRequests', getPendingRequests)

export default router;