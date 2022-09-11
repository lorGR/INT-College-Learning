import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserModel from "../../users/userModel";
import { AddSet } from '../addSet/AddSet';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

import { LegoSetCard } from '../legoSetCard/LegoSetCard';

export interface LegoSet {
    setName: string,
    price: string,
    imgSrc: string,
    _id: string
}

export const MainPage = () => {
    const [legoSetArray, setLegoSetArray] = useState<LegoSet[]>([])
    const [user, setUser] = useState<UserModel>();
    const [showAddItemForm, setShowAddItemForm] = useState<boolean>(false);
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
    },[]);

    const handleAddItemForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        try {
            setShowAddItemForm(!showAddItemForm);
        } catch (error) {
            console.error(error);
        }
    }

    if (!user) {
        navigate("/");
    }
    return (
        <div className='store_session'>
                <div className='store_session__Nav'>
                    <div className="store_session__Nav__logoWrapper">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png" alt="lego logo"/>
                        <h1>Lego store</h1>
                    </div>
                    {user && <h2>Hello {user.username} </h2>}
                    {user?.role !== "member" && <button className='addSetButton' onClick={handleAddItemForm}>
                    <FontAwesomeIcon icon={faPlus} size="1x"/>
                        </button>}
                    {showAddItemForm && <AddSet setShowAddItemForm={setShowAddItemForm} setLegoSetArray={setLegoSetArray}/> }  
                </div>
                <div className="store_session__legoSetContainer">
                     {legoSetArray.map((legoset) => <LegoSetCard key={legoset._id} setLegoSetArray={setLegoSetArray} userRole={user?.role} setName={legoset.setName} price={legoset.price} imgSrc={legoset.imgSrc} />)}
                </div>
        </div>
    );
};