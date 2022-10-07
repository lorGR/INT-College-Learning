const Register = () => {

    const handleMatchPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            // check if confirmPassword match 
            // true: let user click on Register
            // false: don't let user click on Register
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form >
            <input type="email" name="email" id="email" placeholder="Enter email" />
            <input type="password" name="password" id="password" />
            <input onChange={handleMatchPassword} type="password" name="confirmPassword" id="confirmPassword" />
            <input type="submit" value="Register" />
        </form>
    )
}

export default Register