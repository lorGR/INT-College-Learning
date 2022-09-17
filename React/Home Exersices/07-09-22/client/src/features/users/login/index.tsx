import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	async function handleLogin(e: React.FormEvent<HTMLFormElement> | any) {
		try {
			e.preventDefault();
			const email: string = e.target.elements.email.value;
			const password: string = e.target.elements.password.value;

			const { data } = await axios.post('/users/loginUser', { email, password });
			if (!data) throw new Error("Couldn't recieve data from AXIOS POST: /users/loginUser");
			const { userDB, error } = data;
			if (error) throw error;
			if (userDB) {
				navigate('/main');
			}
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<div className="session">
			<div className="session__formCard">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/500px-LEGO_logo.svg.png"
					alt="lego logo"
				/>
				<form onSubmit={handleLogin}>
					<div className="input_container">
						<input type="email" name="email" id="email" placeholder="Enter Your Email" />
						<input type="password" name="password" id="password" placeholder="Enter Your Password" />
					</div>
					<button type="submit" value="Login">
						SIGN IN
					</button>
				</form>
				<p className="form_link">
					First time here? <Link to="/">register now!</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
