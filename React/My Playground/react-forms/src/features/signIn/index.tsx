import { FormEvent } from "react";
const SignIn = () => {
    function handleSignIn(event: FormEvent<HTMLFormElement>) {
        try {
            event.preventDefault();
            const { username, password } = event.target as typeof event.target & {
                username: { value: string },
                password: { value: string }
            }
            console.log(username.value, password.value);
            [username.value, password.value] = ["", ""];
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="sign-in form">
            <h1>SignIn</h1>
            <form onSubmit={handleSignIn}>
                <div className="form-label">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" autoComplete="off" />
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