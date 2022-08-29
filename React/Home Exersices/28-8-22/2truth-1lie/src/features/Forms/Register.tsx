import { useState } from "react";
import { Link } from "react-router-dom";

import { User } from "../../App";

interface RegisterProps {
    onSubmit: CallableFunction
}

const Register: React.FC<RegisterProps> = (props) => {
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
                [e.target.name]: e.target.value
            }));    
        } catch (error) {
            console.error(error);
        }
    }

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            props.onSubmit(user);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} type="email" name="email" id="email" />
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange}  type="text" name="username" id="username" />
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange}  type="password" name="password" id="password" />
                <button type="submit">Register</button>
            </form>
            <p>Already a member?
                <Link to="/login">
                    Log In
                </Link>
            </p>
        </div>
    );
}

export default Register;