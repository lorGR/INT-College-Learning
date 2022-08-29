import { Link } from "react-router-dom";

const Register = () => {
    const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            
        } catch (error) {
            console.error(error);
        }
    }    
    return (
        <div className="register">
            <h1>Register</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input onChange={handleChnage} type="email" name="email" id="email" />
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Register</button>
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