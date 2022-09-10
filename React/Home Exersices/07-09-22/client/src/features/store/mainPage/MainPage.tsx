import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MainPage = () => {
    const { userId } = useParams();
    useEffect( () => {
        try {
            (async () => {
                const { data } = await axios.get("users/getUser");
                if(!data) throw new Error("Couldn't recieve data from AXIOS GET: /users/getUser");
                console.log(data);
            })(); 
        } catch (error) {
            console.error(error);
        }
    })
    return (
        <div>
            <div>
                <h1>Lego store</h1>
            </div>
        </div>
    );
};