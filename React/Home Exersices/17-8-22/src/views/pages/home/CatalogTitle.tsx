const CatalogTitle = () => {
    const fullDate = new Date().toDateString();
    console.log(fullDate);
    return (
        <div className="catalog-title">
            <h1 className="catalog-title__heading">Our Catalog</h1>
            <p className="catalog-title__date">{fullDate}</p>
        </div>
    );
}

export default CatalogTitle;