
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { LegoSetCard } from '../legoSetCard/LegoSetCard';

export interface LegoSet {
    setName:string,
    price:string,
    imgSrc:string
}

export const MainPage = () => {
    const[legoSetArray, setLegoSetArray] = useState<LegoSet[]>([])
    useEffect(() => {
        console.log("use Effect")
        const getAllLegoSets = async () => {
            const {data} = await axios.get("/legos/getAllLegoSets");
            console.log(data)
            const {legoSetArrayDB} = data;
            console.log(legoSetArrayDB)
            setLegoSetArray(legoSetArrayDB)
        }
        getAllLegoSets()
    }, [])
    return (
        <div>
            <div>
                <h1>Lego store</h1>
                {legoSetArray.map((legoset) => <LegoSetCard setName={legoset.setName} price={legoset.price} imgSrc={legoset.imgSrc}/>)}
            </div>
        </div>
    );
};