import { handleMatchPassword } from "./helper";

const Register = () => {

    const handleChange = () => {
            handleMatchPassword();
    }

    const handleRegister = (event: React.FormEvent<HTMLFormElement> | any ) => {
        try {
            event.preventDefault();
            const [ email, password, confirmPassword]: Array<string> = [
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
            <input type="email" name="email" id="email" placeholder="Enter email" />
            <input type="password" name="password" id="password" />
            <input onChange={handleMatchPassword} type="password" name="confirmPassword" id="confirmPassword" />
            <input type="submit" value="Register" id="register"/>
        </form>
    )
}

export default Register