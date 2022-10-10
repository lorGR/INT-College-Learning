import axios from "axios";
import { useState } from "react";
import HandlingErrors from "../handlingErrors/HandlingErrors";
import { handleAvailableEmail, handleMatchPassword, handlePasswordSecurity } from "./helper";

const Register = () => {

    const [validEmail, setValidEmail] = useState<any>();
    const [validPassword, setValidPassword] = useState<any>();
    const [validConfirmPassword, setValidConfirmPassword] = useState<boolean | string>();

    const handleRegister = async (event: React.FormEvent<HTMLFormElement> | any) => {
        event.preventDefault();
        try {
            const [email, password, confirmPassword]: Array<string> = [
                event.target.elements.email.value,
                event.target.elements.password.value,
                event.target.elements.confirmPassword.value
            ];
            setValidEmail(handleAvailableEmail);
            setValidPassword(handlePasswordSecurity);
            setValidConfirmPassword(handleMatchPassword);

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <form onSubmit={handleRegister}>
            <input onBlur={handleAvailableEmail} type="email" name="email" id="email" placeholder="Enter email" />
            <input onBlur={handlePasswordSecurity} type="password" name="password" id="password" />
            <input onBlur={handleMatchPassword} type="password" name="confirmPassword" id="confirmPassword" />
            <input type="submit" value="Register" id="register" />
            <HandlingErrors />
        </form>
    )
}

export default Register