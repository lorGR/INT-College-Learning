import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { User } from '../../App';

interface LoginProps {
    usersList: Array<User>,    
}

const Login: React.FC<LoginProps> = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({
        email: "",
        username: "",
        password: "",
        id: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUser(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))
        } catch (error) {
            console.error(error);
        }
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const existUser = props.usersList.find(userInList => user.email === userInList.email && user.password === userInList.password) 
            if (existUser) {
                navigate(`/user/${existUser.id}`);
            } else {
                console.log("User isn't exist in DB");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} type="email" name="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
            <p>First Time Here? 
                <Link to="/register">
                    Register Now
                </Link>
            </p>
        </div>
    );
}

export default Login;