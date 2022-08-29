import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
            <p>First Time Here? 
                <Link to="/register">
                    Register Now
                </Link>
            </p>
        </div>
    );
}

export default Login;