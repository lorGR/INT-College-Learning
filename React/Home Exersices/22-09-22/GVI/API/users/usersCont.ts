// import { RequestModel } from "../requests/requestsModel";
import { UserModel } from "./userModel";

// export function login(req, res) {
//   try {
//     const { test } = req.body;
//     res.send({ ok: true, test });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// }

export const addUser = async (req, res) => {
  try {
    const {
      email,
      firstName,
      lastName,
      password,
      role,
      startup,
      mentoring,
      location,
      linksView,
      domain,
      phoneNumber,
      about,
      imgSRC,
    } = req.body;
    const user = await UserModel.create({
      email,
      firstName,
      lastName,
      password,
      role,
      startup,
      mentoring,
      location,
      linksView,
      domain,
      phoneNumber,
      about,
      imgSRC,
    });

    res.send({ ok: true, user });
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

// export const sendRequestMentor = async (req, res) => {
//   try {
//     const { senderId, reciverId, message, status } = req.body;
//     if (!senderId || !reciverId)
//       throw new Error("No snder Id and not reciver id");

//     const sender = await UserModel.findById(senderId);
//     const reciver = await UserModel.findById(reciverId);

//     if (!sender || !reciver)
//       throw new Error(`reciver or sender do not exists in DB`);

//     const requestDB = await RequestModel.create({
//       sender,
//       reciver,
//       message,
//       status,
//     });

//     res.send({ ok: true, request: requestDB });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// };

// export const statusChangeRequest = async (req, res) => {
//   try {
//     const { mentorId, menteeId, condition } = req.body;
//     const mentor = await UserModel.findById(mentorId);
//     // const mentee = await UserModel.findById(menteeId)

//     const checkIndex = () => {
//       for (let i = 0; i < mentor.requests.length; i++) {
//         if (mentee.requestings[i].requestingId == mentorId) {
//           return i;
//         }
//       }
//     };

//     await UserModel.updateOne(
//       { _id: menteeId, "requestings.requestingId": mentorId },
//       { $set: { "requestings.$.status": condition } }
//     );
//     const mentee = await UserModel.findById(menteeId);
//     res
//       .status(200)
//       .json(
//         `${mentee.firstName} request ${
//           mentee.requestings[checkIndex()].status
//         } from ${mentor.firstName}`
//       );
//     console.log(mentee);
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const getUser = async (req, res) => {
//   const { mentorId, menteeId } = req.body;
//   const user = await UserModel.findById(menteeId);
//   res.send(user);
// };
