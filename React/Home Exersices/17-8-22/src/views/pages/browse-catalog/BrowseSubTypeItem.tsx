import { useState } from "react";

interface BrowseSubTypeItem {
    item : item
}

interface item {
    type: string,
    id: any,
    imgSrc: string,
    imgSrc2: string,
    price: number,
    description: string
}

const BrowseSubTypeItem = ({item} : BrowseSubTypeItem) => {
    
    const [imgUrl, setImgUrl] = useState(item.imgSrc);
    
    function handleMouseEnter () {
        setImgUrl(item.imgSrc2);
    }
    function handleMouseLeave () {
        setImgUrl(item.imgSrc);
    }
    return (
        <div className="browse-subtype__item">
            <div className="item-container">
                <img src={imgUrl} alt={item.type} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
            </div>
            <p className="browse-subtype__item__description">{item.description}</p>
            <p className="browse-subtype__item__price">{item.price}$</p>
        </div>
    );
}

export default BrowseSubTypeItem;