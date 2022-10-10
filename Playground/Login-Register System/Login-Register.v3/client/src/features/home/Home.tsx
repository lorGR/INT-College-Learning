import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleSignInBtn = () => {
        navigate("/sign-in");
    }

    const handleSignUpBtn = () => {
        navigate("/sign-up");
    }

    return (
        <div className="home">
            <div className="home__intro">
                <h1>JOIN THE BIGGEST COMMUNITY</h1>
                <h2>FOR FREE</h2>
            </div>
            <div className="home__actions">
                <button onClick={handleSignInBtn}>Sign In</button>
                <button onClick={handleSignUpBtn}>Sign Up</button>
            </div>
        </div>
    )
}

export default Home