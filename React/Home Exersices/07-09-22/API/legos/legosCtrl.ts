import express from 'express';
import LegoModel from './legosModel';

export async function addLegoSet(req: express.Request, res: express.Response) {
	try {
		const { legoSetName, legoSetPrice, legoSetImgUrl } = req.body;
		if (!legoSetName || !legoSetPrice || !legoSetImgUrl)
			throw new Error('no information from client regarding lego set');
		const legoSet = new LegoModel({ setName: legoSetName, price: legoSetPrice, imgSrc: legoSetImgUrl });
		const legoSetDB = await legoSet.save();
		if (!legoSetDB) throw new Error("the lego set couldn't be saved");

		const legoSetArrayDB = await getAllItems();
		res.send({legoSetArrayDB});
	} catch (error) {
		res.send(error);
	}
}
export async function getAllLegoSets(req:express.Request, res:express.Response) {
	try {
		const legoSetArrayDB = await getAllItems();
		res.send({legoSetArrayDB});
	} catch (error) {
		res.send(error)
	}
}

export async function deleteItem (req: express.Request, res: express.Response) {
	try {
		const { setName } = req.body;
		if(!setName) throw new Error("Couldn't get setName from req.body");

		if(await LegoModel.deleteOne({setName})){
			const legoSetArrayDB = await getAllItems();
			res.send({sucsess: true, legoSetArrayDB});
		} else {
			res.send({sucsess : false});
			throw new Error(`Couldn't find name of ${setName}`);
		}

	} catch (error) {
		res.send({error: error.message});
	}
}

export async function editItem(req: express.Request, res: express.Response) {
	try {
		const { legoSetName , legoSetPrice , legoSetImgUrl, setName } = req.body;
		if (!legoSetName || !legoSetPrice || !legoSetImgUrl || !setName) throw new Error("Couldn't get all fields from req.body");

		if(await LegoModel.findOne({"setName": setName}).updateOne({"setName": legoSetName, "price": legoSetPrice, "imgSrc": legoSetImgUrl})) {
			const legoSetArrayDB = await getAllItems();
			res.send({sucsess: true, legoSetArrayDB});
		} else {
			res.send({sucsess: false});
			throw new Error(`Couldn't find and update set with the name: ${setName}`);
		}
	} catch (error) {
		res.send({error: error.message});
	}
}

async function getAllItems() {
	try {
		const legoSetArrayDB = await LegoModel.find();
		if(!legoSetArrayDB) throw new Error("no lego sets found on DB");
		return legoSetArrayDB;
	} catch (error) {
		console.error(error);
	}
}
