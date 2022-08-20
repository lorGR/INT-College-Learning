interface BrowseCatalogItems {
    type: string
}

const BrowseCatalogItems = ({type}: BrowseCatalogItems) => {
    return (
        <div className="browse-catalog-items">
            <p>{type}</p>
        </div>
    );
}

export default BrowseCatalogItems;