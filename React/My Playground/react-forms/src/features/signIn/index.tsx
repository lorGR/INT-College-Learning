const SignIn = () => {
    return (
        <div className="sign-in ">
            <h1>SignIn</h1>
            <form>
                <div className="form-label">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username"/>
                </div>
                <div className="form-label">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default SignIn;