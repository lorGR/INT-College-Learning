import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
    async function handleLogin(e: React.FormEvent<HTMLFormElement> | any) {
        try {
            e.preventDefault();
            const email: string = e.target.elements.email.value;
            const password: string = e.target.elements.password.value;

            const { data } = await axios.post("/users/loginUser", { email, password });
            if (!data) throw new Error("Couldn't recieve data from AXIOS POST: /users/loginUser");
            console.log(data);

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="Login" />
            </form>
            <p>First time here? <Link to="/">register now!</Link></p>
        </div>
    );
}

export default Login;