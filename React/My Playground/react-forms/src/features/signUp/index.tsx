import { FormEvent } from "react";
import { User } from "../../App";

const SignUp = () => {
    const { v4: uuidv4 } = require('uuid');
    
    function handleSignUp(event: FormEvent<HTMLFormElement>) {
        try {
            event.preventDefault();
            const { username, password } = event.target as typeof event.target & {
                username: { value: string },
                password: { value: string }
            }
            console.log( username.value, password.value);
            const user:User = {
                username : username.value,
                password: password.value,
                id: uuidv4()
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <div className="sign-up form">
            <h1>SignUp</h1>
            <form onSubmit={handleSignUp}>
                <div className="form-label">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" autoComplete="off"/>
                </div>
                <div className="form-label">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default SignUp;