const Register = () => {
    return (
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" id="usernmae" />
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <input type="submit" value="Register"/>
        </form>
    );
}

export default Register;