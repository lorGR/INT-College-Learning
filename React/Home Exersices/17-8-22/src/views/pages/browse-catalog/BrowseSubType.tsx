import BrowseSubTypeTitle from "./BrowseSubTypeTitle";
import BrowseSubTypeItem from "./BrowseSubTypeItem";
const { v4: uuidv4 } = require('uuid');

interface BrowseSubType {
    type: string,
    backType: string
}

const BrowseSubType = ({ type, backType }: BrowseSubType) => {
    const items = [
        {
            type: 'T-Shirts',
            id: uuidv4(),
            imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/05/24/1653385151dd0bac320a1d2135e0c101af9183f523_thumbnail_900x.webp",
            price: 39.50
        },
        {
            type: "T-Shirts",
            id: uuidv4(),
            imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/04/06/1649214874ccf04ce3fd228d3d208473d7a63366d3_thumbnail_900x.webp",
            price: 44.90
        },
        {
            type: 'T-Shirts',
            id: uuidv4(),
            imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/03/16/1647407458f7f9a10e0f33eda4ee056245f77963e6_thumbnail_900x.webp",
            price: 24.99
        },
        {
            type: "T-Shirts",
            id: uuidv4(),
            imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/07/25/165871730994b00ecb74c947ec6deeb99ab2ba7517_thumbnail_900x.webp",
            price: 21.90
        },
        {
            type: "T-Shirts",
            id: uuidv4(),
            imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/02/11/1644541565d89d1441fe628485da2a4563e75e2439_thumbnail_900x.webp",
            price: 24.90
        },
        {
            type: "T-Shirts",
            id: uuidv4(),
            imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/04/18/16502751599968ed3e1529a9fbc9c77104cdf3e536_thumbnail_900x.webp",
            price: 14.90
        }
    ]
    return (
        <div className="browse-subtype">
            <BrowseSubTypeTitle type={type} backType={backType} />
            <div className="browse-subtype__items">
                {items.map( item => {
                    if(type === item.type) {
                        return (<BrowseSubTypeItem item={item} key={item.id}/>)
                    }
                })}
            </div>
        </div>
    );
}

export default BrowseSubType;