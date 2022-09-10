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
		res.send({ success: true, legoSetDB });
	} catch (error) {
		res.send(error);
	}
}
