import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface BrowseSubTypeTitle {
    type:string,
    backType : string
}

const BrowseSubTypeTitle = ({type, backType}: BrowseSubTypeTitle) => {
    const backTo = `/${backType}`;
    return (
        <div className="browse-subtype__title">
            <Link to={backTo}>
                <FontAwesomeIcon icon={faAngleLeft} size="2x" />
            </Link>
            <h2>{type}</h2>
        </div>
    );
}

export default BrowseSubTypeTitle;