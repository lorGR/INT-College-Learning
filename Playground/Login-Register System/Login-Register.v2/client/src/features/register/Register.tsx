
import { useState } from "react";
import { UserModel } from "../models/userModel";
import { handleEmailSecurity, handlePasswordSecurity, handlePasswordMatch, checkValidation, register } from "./registerHelper";

const Register = () => {

    // const [registerdUser, setRegisteredUser] = useState<UserModel | null>(null);

    const handleRegister = async (event: React.FormEvent<HTMLFormElement> | any) => {
        try {
            event.preventDefault();
            const informationValid = checkValidation();
            if (informationValid) {
                const email = event.target.elements.email.value;
                const password = event.target.elements.password.value;
                const user = await register(email,password);
                // setRegisteredUser(user);
                // console.log(registerdUser);
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