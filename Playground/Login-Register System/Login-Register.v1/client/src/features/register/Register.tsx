import axios from "axios";
import { handleAvailableEmail, handleMatchPassword } from "./helper";

const Register = () => {

    const handleRegister = async (event: React.FormEvent<HTMLFormElement> | any) => {
        try {
            event.preventDefault();
            const [email, password, confirmPassword]: Array<string> = [
                event.target.elements.email.value,
                event.target.elements.password.value,
                event.target.elements.confirmPassword.value
            ];            

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <form onSubmit={handleRegister}>
            <input onBlur={handleAvailableEmail} type="email" name="email" id="email" placeholder="Enter email" />
            <input type="password" name="password" id="password" />
            <input onBlur={handleMatchPassword} type="password" name="confirmPassword" id="confirmPassword" />
            <input type="submit" value="Register" id="register" />
        </form>
    )
}

export default Register