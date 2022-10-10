

const SignIn = () => {
    return (
        <div className="SignIn">
            <form>
                <input type="email" name="email" id="email" placeholder="Enter Email" />
                <input type="password" name="password" id="password" placeholder="Enter Password" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default SignIn