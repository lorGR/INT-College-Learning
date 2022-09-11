import axios from 'axios';
import { useState } from 'react';
import EditSet from '../editSet/EditSet';

interface LegoSetProps {
	setName: string;
	price: string;
	imgSrc: string;
	userRole: string | undefined;
	setLegoSetArray: CallableFunction;
}

export const LegoSetCard = ({ setName, price, imgSrc, userRole, setLegoSetArray }: LegoSetProps) => {
	const [ showEditItemForm, setShowEditItemForm ] = useState<boolean>(false);
	const handleDeleteItem = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		try {
			const { data } = await axios.delete('/legos/deleteItem', { data: { setName } });
			if (!data) throw new Error("Couldn't receive data from AXIOS DELETE /legos/deleteItem");
			const { legoSetArrayDB } = data;
			setLegoSetArray(legoSetArrayDB);
		} catch (error) {
			console.error(error);
		}
	};
	const handleEditItem = () => {
		try {
			setShowEditItemForm(!showEditItemForm);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="card">
			<div className="card__imgWrapper">
				<img src={imgSrc} alt={setName} />
			</div>
			{userRole !== 'member' && <button onClick={handleDeleteItem}>Delete</button>}
			{userRole !== 'member' && <button onClick={handleEditItem}>Edit</button>}
			{showEditItemForm && (
				<EditSet
					setName={setName}
					setLegoSetArray={setLegoSetArray}
					setShowEditItemForm={setShowEditItemForm}
				/>
			)}
			<h2>{setName}</h2>
			<h3>Price: {price}$</h3>
		</div>
	);
};
