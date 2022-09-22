
import {UserModel} from "../users/userModel";

import { RequestModel, Status } from "./requestsModel";


export async function getRequest(req, res) {
  try {
    const {reciverId } = req.body;
     
      const reqDB = await RequestModel.find({reciver:{userId:reciverId}});
      if (!reqDB) throw new Error("Request does not found");
      
      res.send({reqDB})

  } catch (error) {
      console.error(error)
  }
}

export async function getPendingRequests(req, res) {
  try {
    const {reciverId} = req.body;
     
      const reqDB = await RequestModel.find({reciver:{userId:reciverId}, status:Status.PENDING});
      if (!reqDB) throw new Error("Request does not found");
      
      res.send(reqDB)

  } catch (error) {
      console.error(error)
  }
}

export const sendRequest = async (req, res) => {
try {
  const { senderId, reciverId, message, status } = req.body;
  if (!senderId || !reciverId)
    throw new Error("No snder Id and not reciver id");

  const sender = await UserModel.findById(senderId);
  const reciver = await UserModel.findById(reciverId);

  if (!sender || !reciver)
    throw new Error(`reciver or sender do not exists in DB`);

  const requestDB = await RequestModel.create({
    sender,
    reciver,
    message,
    status,
  });

  res.send({ ok: true, request: requestDB });
} catch (error) {
  console.error(error);
  res.status(500).send({ error: error.message });
}
};

export const getMyRequests = async (req, res) =>{
  try {
    const {reciverId} = req.body;
     
    const reqDB = await RequestModel.find({reciver:{userId:reciverId}});
    if (!reqDB) throw new Error("Request does not found");
    const userDB = await RequestModel.findById(reciverId);
    // console.log(userDB);

    // let userReq = userDB.status
    // let newReqDB = reqDB.filter((reqDB) => reqDB.reciverId !== 'empty');

    res.send({ requests:reqDB})
  }catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}