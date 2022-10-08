import axios from "axios";
import { useState } from "react";
import { handleMatchPassword } from "./helper";

const Register = () => {

    const [registerStep1, setRegisterStep1] = useState(false);

    const handleChange = () => {
        handleMatchPassword();
    }

    const handleRegister = async (event: React.FormEvent<HTMLFormElement> | any) => {
        try {
            event.preventDefault();
            const [email, password, confirmPassword]: Array<string> = [
                event.target.elements.email.value,
                event.target.elements.password.value,
                event.target.elements.confirmPassword.value
            ];

            const { data } = await axios.post("/users/register-step-1", { email, password, confirmPassword });
            if (!data) throw new Error("Couldn't receive data from axios POST : /users/register-step-1");
            
            const { error, register } = data;
            if(error) throw error;

            register && setRegisterStep1(true);
            
            
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <form onSubmit={handleRegister}>
            <input type="email" name="email" id="email" placeholder="Enter email" />
            <input type="password" name="password" id="password" />
            <input onChange={handleMatchPassword} type="password" name="confirmPassword" id="confirmPassword" />
            <input type="submit" value="Register" id="register" />
        </form>
    )
}

export default Register