import tshirts from "../../assets/images/tshirts.png";
import pants from "../../assets/images/pants.png";
import shoes from "../../assets/images/shoes.png";
import accessories from "../../assets/images/accessories.png";

interface CatalogItemProps {
    type : string
}


const CatalogItem = ({ type }:CatalogItemProps) => {
    
    let imgUrl ;
    if (type === 'tshirts') {
        imgUrl = tshirts;
    } else if ( type === 'pants') {
        imgUrl = pants;
    } else if ( type === 'shoes') {
        imgUrl = shoes;
    } else {
        imgUrl = accessories;
    }
    
    return (
        <div className="catalog__item">
            <p>{type.toUpperCase()}</p>
            <img src={imgUrl} alt={imgUrl} />
        </div>
    );
}

export default CatalogItem;