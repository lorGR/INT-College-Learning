import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    async function handleRegister(e: React.FormEvent<HTMLInputElement> | any) {
        try {
            e.preventDefault();
            const username: string = e.target.elements.username.value;
            const email: string = e.target.elements.email.value;
            const password: string = e.target.elements.password.value;

            const { data } = await axios.post("/users/registerUser", { username, password, email });
            if (!data) throw new Error("Couldn't receive data from AXIOS POST: /users/addUser");
            console.log(data);
            navigate("/login");

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="usernmae" />
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="Register" />
            </form>
            <p>Already a member? <Link to="/login">login now!</Link></p>
        </div>
    );
}

export default Register;