import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserModel from "../../users/userModel";

import { LegoSetCard } from '../legoSetCard/LegoSetCard';
export interface LegoSet {
    setName:string,
    price:string,
    imgSrc:string
}

export const MainPage = () => {
    const[legoSetArray, setLegoSetArray] = useState<LegoSet[]>([])
    const { userId } = useParams();
    const [user, setUser] = useState<UserModel>();
    useEffect(() => {
        try {
            const getUser = async () => {
                const { data } = await axios.post("/users/getUser", { userId });
                if (!data) throw new Error("Couldn't recieve data from AXIOS POST: /users/getUser");
                const { user } = data;
                setUser(user);
            }
        const getAllLegoSets = async () => {
            const {data} = await axios.get("/legos/getAllLegoSets");
            const {legoSetArrayDB} = data;
            setLegoSetArray(legoSetArrayDB)
        }
            getUser();
        getAllLegoSets()
        } catch (error) {
            console.error(error);
        }
    },[]);
    return (
        <div>
            <div>
                <h1>Lego store</h1>
                {user && <h2>Hello {user.username} </h2>}
                {user?.role !== "member" && <h2>Add Item</h2> }
                {legoSetArray.map((legoset) => <LegoSetCard setName={legoset.setName} price={legoset.price} imgSrc={legoset.imgSrc}/>)}
            </div>
        </div>
    );
};