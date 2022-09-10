import axios from "axios";

interface AddSetProps {
    setShowAddItemForm: CallableFunction,
    setLegoSetArray: CallableFunction
}

export const AddSet: React.FC<AddSetProps> = (props) => {
    async function handleSubmitLegoSet(e: any) {
        e.preventDefault();
        try {
            const legoSetName = e.target.elements.LegoSetName.value;
            const legoSetPrice = e.target.elements.LegoSetPrice.value;
            const legoSetImgUrl = e.target.elements.LegoSetImgUrl.value;

            const { data } = await axios.post('/legos/addLegoSet', { legoSetName, legoSetPrice, legoSetImgUrl });
            const { legoSetArrayDB } = data;
            props.setShowAddItemForm(false);
            props.setLegoSetArray(legoSetArrayDB);
        } catch (error) {
            console.error(error);
        }

    }
    const handleCloseForm = () => {
        try {
            props.setShowAddItemForm(false);
        } catch (error) {
            console.error(error);
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
            <button onClick={handleCloseForm}>Cancel</button>
        </div>
    );
};
