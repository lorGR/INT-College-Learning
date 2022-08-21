interface BrowseSubTypeItem {
    item : item
}

interface item {
    type: string,
    id: any,
    imgSrc: string
    price: number
}

const BrowseSubTypeItem = ({item} : BrowseSubTypeItem) => {
    return (
        <div className="browse-subtype__item">
            <div className="item-container">
                <img src={item.imgSrc} alt={item.type} />
            </div>
            <p>{item.price}$</p>
        </div>
    );
}

export default BrowseSubTypeItem;