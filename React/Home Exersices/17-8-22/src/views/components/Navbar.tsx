import { Link } from "react-router-dom";

//Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__items">
                <Link to="/"><li className="navbar__item"><FontAwesomeIcon icon={faHouse} /></li> </Link>
                <Link to="/cart"><li className="navbar__item">Cart</li></Link>
                <Link to="/profile"><li className="navbar__item">Profile</li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;