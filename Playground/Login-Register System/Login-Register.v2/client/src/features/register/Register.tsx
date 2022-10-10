
import axios from "axios";
import { useState } from "react";
import { handleEmailSecurity, handlePasswordSecurity, handlePasswordMatch, checkValidation, register } from "./registerHelper";

const Register = () => {

    // const [user, setUser] = useState()

    const handleRegister = async (event: React.FormEvent<HTMLFormElement> | any) => {
        try {
            event.preventDefault();
            const informationValid = checkValidation();
            if (informationValid) {
                const email = event.target.elements.email.value;
                const password = event.target.elements.password.value;
                const user = await register(email,password);
                console.log(user);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleRegister}>
            <input onBlur={handleEmailSecurity} type="email" name="email" id="email" placeholder="Enter email" />
            <input onBlur={handlePasswordSecurity} type="password" name="password" id="password" placeholder="Enter password" />
            <input onBlur={handlePasswordMatch} type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" />
            <input type="submit" value="Register" />
        </form>
    )
}

export default Register;