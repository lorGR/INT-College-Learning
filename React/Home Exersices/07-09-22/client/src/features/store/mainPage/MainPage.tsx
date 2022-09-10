import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserModel from "../../users/userModel";

export const MainPage = () => {
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
            getUser();
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
            </div>
        </div>
    );
};