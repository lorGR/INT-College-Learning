import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="register">
            <h1>Register</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
            <p>Already a member?
                <Link to="/login">
                    Log In
                </Link>
            </p>
        </div>
    );
}

export default Register;