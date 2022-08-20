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
            subType: "T-Shirts",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Long Sleeves",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Sweaters",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Button Down",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Knitwears",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Jackets",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Hoodies",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Coats",
            id: uuidv4()
        },
        {
            type: "bottoms",
            subType: "joggers",
            id: uuidv4()
        },
    ];
    return (
        <div className="browse-catalog">
            <div className="browse-catalog__header">
                <Link to="/" className="browse-catalog__header__back">
                    <FontAwesomeIcon icon={faAngleLeft} size="2x" color="#fff" />
                </Link>
                <h2 className="browse-catalog__header__title">{headerTitle.toLocaleUpperCase()}</h2>
            </div>
            <div className="browse-catalog__grid">
                { catalogItems.map(item => {
                    if(item.type === type)
                    return (
                        <BrowseCatalogItems type={item.subType} key={item.id}/>
                    );
                })}
            </div>

        </div>
    );
}

export default BrowseCatalog;