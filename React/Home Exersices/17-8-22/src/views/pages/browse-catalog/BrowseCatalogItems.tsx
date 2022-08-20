import tshirts from "../../assets/images/tshirts.png";

interface BrowseCatalogItems {
    type: string
}

const BrowseCatalogItems = ({type}: BrowseCatalogItems) => {
    let imgUrl;
    imgUrl = type === 't-shirts' ? tshirts : '';
    return (
        <div className="browse-catalog-items">
            <p>{type}</p>
            <img src={imgUrl} alt={imgUrl}/>
        </div>
    );
}

export default BrowseCatalogItems;