import tshirts from "../../assets/images/tshirts.png";
import pants from "../../assets/images/pants.png";
import shoes from "../../assets/images/shoes.png";
import jewelry from "../../assets/images/jewelry.png";
import glasses from "../../assets/images/glasses.png";
import socks from "../../assets/images/socks.png";
import backpacks from "../../assets/images/backpacks.png";
import belts from "../../assets/images/belts.png";

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
    } else if ( type === 'jewelry'){
        imgUrl = jewelry;
    } else if ( type === 'glasses') {
        imgUrl = glasses;
    } else if ( type === 'socks') {
        imgUrl = socks;
    } else if ( type === 'backpacks') {
        imgUrl = backpacks;
    } else if ( type === 'belts') {
        imgUrl = belts;
    }
    
    return (
        <div className="catalog__item">
            <p>{type.toUpperCase()}</p>
            <img src={imgUrl} alt={imgUrl} />
        </div>
    );
}

export default CatalogItem;