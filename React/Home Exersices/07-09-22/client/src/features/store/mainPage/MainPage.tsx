import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserModel from "../../users/userModel";

import { LegoSetCard } from '../legoSetCard/LegoSetCard';
export interface LegoSet {
    setName: string,
    price: string,
    imgSrc: string
}

export const MainPage = () => {
    const [legoSetArray, setLegoSetArray] = useState<LegoSet[]>([])
    const [user, setUser] = useState<UserModel>();
    const navigate = useNavigate();
    useEffect(() => {
        try {
            const getUser = async () => {
                const { data } = await axios.post("/users/getUser");
                const { userDB } = data;
                if (!userDB) throw new Error("Couldn't get userDB from data");
                setUser(userDB);
            }
            const getAllLegoSets = async () => {
                const { data } = await axios.get("/legos/getAllLegoSets");
                const { legoSetArrayDB } = data;
                setLegoSetArray(legoSetArrayDB);
            }
            getUser();
            getAllLegoSets()
        } catch (error) {
            console.error(error);
        }
    }, []);
    if (!user) {
        navigate("/");
    }
    return (
        <div>
            <div>
                <h1>Lego store</h1>
                {user && <h2>Hello {user.username} </h2>}
                {user?.role !== "member" && <button>Add Item</button>}
                {legoSetArray.map((legoset) => <LegoSetCard setName={legoset.setName} price={legoset.price} imgSrc={legoset.imgSrc} />)}
            </div>
        </div>
    );
};