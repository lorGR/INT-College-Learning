import mongoose from 'mongoose';
import  {UserModel, Role}  from '../users/userModel';
import {connectModel, Status} from '../connections/connectionsSchema'

 export async function getMentees(req, res){
    try {
        const allMenteesDB = await UserModel.find({role: Role.MENTEE});
        res.send(allMenteesDB)
    } catch (error) {
        res.send(error)
    }
}

export async function getMentee(req, res){
    try {
        const menteeByNameDB = await UserModel.find({firstName: 1, lastName: 1 })
        res.send(menteeByNameDB)
    } catch (error) {
        res.send(error)
    }
}

export async function getMenteesByFilter(req, res){
    try {
        const menteeFilterDB = await UserModel.find({$and: [
            { $or: [{location: {country: 1, city: 1} }] },
            { $or: [{startup: 1}] }
        ] })
        res.send(menteeFilterDB)
    } catch (error) {
        res.send(error)
    }
}

export async function getMyMentees(req, res){
    try {
       const {data} = await connectModel.find({mentorId: 1});

    //    const {status: Status} = data;
    //    const {REJECTED, PENDING, APPROVED} = Status;

    //    res.send(data, {status: Status.REJECTED}, {status:Status.PENDING}, {status:Status.APPROVED} )  
    } catch (error) {
        res.send(error)
    }
}

export async function removeMentee(req, res){
    const {mentee}= req.body;
    console.log(mentee)

    const menteeDB= await UserModel.findByIdAndRemove( {_id:mentee} )
    console.log(menteeDB)
    if(!menteeDB)throw new Error("couldn't be found");

    res.send(menteeDB)
}




