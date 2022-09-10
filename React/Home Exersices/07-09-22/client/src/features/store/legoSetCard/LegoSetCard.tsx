import axios from "axios";

interface LegoSetProps {
    setName: string,
    price: string,
    imgSrc: string,
    userRole: string | undefined,
    setLegoSetArray: CallableFunction
}

export const LegoSetCard = ({ setName, price, imgSrc, userRole, setLegoSetArray}: LegoSetProps) => {
    const handleDeleteItem = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            const { data } = await axios.delete("/legos/deleteItem", { data: { setName } });
            if (!data) throw new Error("Couldn't receive data from AXIOS DELETE /legos/deleteItem");
            const { legoSetArrayDB } = data;
            setLegoSetArray(legoSetArrayDB);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <div>
                {userRole !== "member" && <button onClick={handleDeleteItem}>Delete</button>}
                <img src={imgSrc} alt={setName} />
                <h2>{setName}</h2>
                <h3>Price: {price}$</h3>
            </div>
        </div>
    );
};