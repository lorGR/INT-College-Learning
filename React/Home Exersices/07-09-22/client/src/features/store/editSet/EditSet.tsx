import axios from "axios";

interface EditSetProps {
    setName: string,
    setLegoSetArray: CallableFunction,
    setShowEditItemForm: CallableFunction
}

const EditSet: React.FC<EditSetProps> = ({ setName, setLegoSetArray, setShowEditItemForm }) => {
    const handleEditItem = async (e: React.FormEvent<HTMLFormElement> | any) => {
        try {
            e.preventDefault();
            const legoSetName = e.target.elements.LegoSetName.value;
            const legoSetPrice = e.target.elements.LegoSetPrice.value;
            const legoSetImgUrl = e.target.elements.LegoSetImgUrl.value;

            const { data } = await axios.patch("/legos/editItem", { legoSetName, legoSetPrice, legoSetImgUrl, setName });
            if (!data) throw new Error("Couldn't receive data from AXIOS PATCH: /legos/editItem");
            const { legoSetArrayDB } = data;
            setLegoSetArray(legoSetArrayDB);
            setShowEditItemForm(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Edit Set:</h1>
            <form onSubmit={handleEditItem}>
                <input type="text" name="LegoSetName" placeholder="Enter Set Name Here" value={setName} />
                <input type="number" name="LegoSetPrice" placeholder="Enter Set price Here" />
                <input type="text" name="LegoSetImgUrl" placeholder="Enter Set img Url Here" />
                <button type="submit">Submit Set</button>
            </form>
        </div>
    );
}

export default EditSet;