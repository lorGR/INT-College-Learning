import {UserModel,  Role } from "../users/userModel";


export async function getMentors (req:any, res:any){
    try {
        const allMentorsDB = await UserModel.find({role: Role.MENTOR})
        console.log(allMentorsDB)
        res.send({data: allMentorsDB})
    } catch (error) {
        res.error(error)
    }
}

export async function getMentor (req:any, res:any){
    try {
        const mentorId = req.body
        const mentorDB = await UserModel.findOne({_id: mentorId})
        res.send({data: mentorDB})
    } catch (error) {
        res.error(error)
    }
}

export async function getMentorByFilter (req:any, res:any){
    try {
        const {domainChoosen, countryChoosen, nameChoosen } = req.body
        const choosenMentorsByDomainDB = await UserModel.find({ domain:domainChoosen })
        const choosenMentorsByCountryDB = await UserModel.find({country: countryChoosen}) 
        const choosenMentorsByNameDB = await UserModel.find({name:nameChoosen})
        const choosenMentorsDB = []
        choosenMentorsDB.concat(choosenMentorsByDomainDB)
        choosenMentorsDB.concat(choosenMentorsByNameDB)
        choosenMentorsDB.concat(choosenMentorsByCountryDB)
        res.send(choosenMentorsDB)
    } catch (error) {
        res.error(error)
    }
}

export async function getMyMentors (req:any, res:any){
    try {
        const {userId} = req.cookies;
        //const myId = req.body
        const myMentorsDB = await UserModel.find({mentees: userId})
        if (myMentorsDB == null)
        {
            res.send({message:"This user has no Mentors yet"})
        }
        else{
            res.send({data: myMentorsDB})
        }
    } catch (error) {
        res.error(error)
    }
}

export async function deleteMentor(req:any, res:any){
    try {
        const { mentorId } = req.body
        await UserModel.findByIdAndDelete(mentorId)
        res.send({ message: `mentor deleted` })
    } catch (error) {
        res.error(error)
    }
}