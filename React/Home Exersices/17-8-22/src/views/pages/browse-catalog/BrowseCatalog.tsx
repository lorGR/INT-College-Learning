interface BrowseCatalogProps {
    type: string
}

const BrowseCatalog = ({type}: BrowseCatalogProps) => {
    return (
        <div className="browse-catalog">
            <h1>{type}</h1>
        </div>
    );
}

export default BrowseCatalog;