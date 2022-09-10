import axios from "axios";

export const AddSet = () => {
	async function handleSubmitLegoSet(e:any) {
        e.preventDefault();
        try {
            const legoSetName = e.target.elements.LegoSetName.value;
            const legoSetPrice = e.target.elements.LegoSetPrice.value;
            const legoSetImgUrl = e.target.elements.LegoSetImgUrl.value;

            const {data} = await axios.post('/legos/addLegoSet', {legoSetName,legoSetPrice,legoSetImgUrl})
            console.log(data)
            const legoSetDB = data;
            console.log(legoSetDB) 
        } catch (error) {
            
        }

	}
	return (
		<div>
            <h1>Add Set</h1>
			<form onSubmit={handleSubmitLegoSet} >
                <input type="text" name="LegoSetName" placeholder="Enter Set Name Here" />
                <input type="number" name="LegoSetPrice" placeholder="Enter Set price Here" />
                <input type="text" name="LegoSetImgUrl" placeholder="Enter Set img Url Here" />
                <button type="submit">Submit Set</button>
            </form>
		</div>
	);
};
