const SignUp = () => {
    function handleSendForm() {

    }
    return (
        <div className="sign-up form">
            <h1>SignUp</h1>
            <form onSubmit={handleSendForm}>
                <div className="form-label">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" autoComplete="off"/>
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

export default SignUp;