import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();

	async function handleRegister(e: React.FormEvent<HTMLInputElement> | any) {
		try {
			e.preventDefault();
			const username: string = e.target.elements.username.value;
			const email: string = e.target.elements.email.value;
			const password: string = e.target.elements.password.value;

			const { data } = await axios.post('/users/registerUser', { username, password, email });
			if (!data) throw new Error("Couldn't receive data from AXIOS POST: /users/addUser");
			console.log(data);
			navigate('/login');
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
				<form onSubmit={handleRegister}>
					<div className="input_container">
						<input type="text" name="username" id="usernmae" placeholder="Enter Username" />
						<input type="email" name="email" id="email" placeholder="Enter Email" />
						<input type="password" name="password" id="password" placeholder="Choose Password" />
					</div>
					<button type="submit">SIGN UP</button>
				</form>
				<p className='form_link'>
					Already a member? <Link to="/login">login now!</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
