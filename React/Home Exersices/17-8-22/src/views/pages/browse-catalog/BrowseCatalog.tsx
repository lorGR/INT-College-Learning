import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import BrowseCatalogItems from "./BrowseCatalogItems";

const { v4: uuidv4 } = require('uuid');

interface BrowseCatalogProps {
    type: string,
}

const BrowseCatalog = ({ type }: BrowseCatalogProps) => {
    const headerTitle = `${type} Catalog`;
    const catalogItems = [
        {
            type: "tops",
            subType: "t-shirts",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "long sleeves",
            id: uuidv4()
        },
        {
            type: "bottoms",
            subType: "joggers",
            id: uuidv4()
        }
    ];
    return (
        <div className="browse-catalog">
            <div className="browse-catalog__header">
                <Link to="/" className="browse-catalog__header__back">
                    <FontAwesomeIcon icon={faAngleLeft} size="2x" color="#fff" />
                </Link>
                <h2 className="browse-catalog__header__title">{headerTitle.toLocaleUpperCase()}</h2>
            </div>
            { catalogItems.map(item => {
                if(item.type === type)
                return (
                    <BrowseCatalogItems type={item.subType} key={item.id}/>
                );
            })}

        </div>
    );
}

export default BrowseCatalog;