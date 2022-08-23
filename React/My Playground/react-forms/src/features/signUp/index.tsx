import { FormEvent, useState } from "react";
import { User } from "../../App";

interface SignUpProps {
    onSubmit: any
}

const SignUp: React.FC<SignUpProps> = ({ onSubmit }) => {
    const { v4: uuidv4 } = require('uuid');
    const [user, setUser] = useState<User>();

    // const handleSignUp = (event: FormEvent<HTMLFormElement>) => {
    const handleSignUp = (event: FormEvent<HTMLFormElement> | any) => {
        try {
            event.preventDefault();
            const username = event.target.elements.username.value;
            const password = event.target.elements.password.value;
            setUser({ username: username, password: password, id: uuidv4() });
            onSubmit(user);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="sign-up form">
            <h1>SignUp</h1>
            <form onSubmit={handleSignUp}>
                <div className="form-label">
                    <label htmlFor="usernameSignUp">Username:</label>
                    <input type="text" id="usernameSignUp" name="username" autoComplete="off" />
                </div>
                <div className="form-label">
                    <label htmlFor="passwordSignUp">Password:</label>
                    <input type="password" name="password" id="passwordSignUp" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default SignUp;