import { Link } from "react-router-dom";

//Font Awesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__items">
                <Link to="/">
                    <li className="navbar__item">
                        <FontAwesomeIcon icon={faHouse} size="3x"/>
                    </li>
                </Link>
                <Link to="/cart">
                    <li className="navbar__item">
                        <FontAwesomeIcon icon={faCartShopping} size="3x" />
                    </li>
                </Link>
                <Link to="/profile">
                    <li className="navbar__item">
                        <FontAwesomeIcon icon={faUser} size="3x"/>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;