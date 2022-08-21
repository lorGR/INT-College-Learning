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
            imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/05/24/1653385153e0d95f5728653f6a5ff49c70b81fc7e0_thumbnail_900x.webp",
            price: 39.49,
            description: "Extended Sizes Letter Graphic Tee"
        },
        {
            type: "T-Shirts",
            id: uuidv4(),
            imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/04/06/1649214874ccf04ce3fd228d3d208473d7a63366d3_thumbnail_900x.webp",
            imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/04/06/16492148663064b062fe3becf7b2beb9db12975a1a_thumbnail_900x.webp",
            price: 44.99,
            description: "Solgen & Palm Tree Print Tee"
        },
        {
            type: 'T-Shirts',
            id: uuidv4(),
            imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/03/16/1647407458f7f9a10e0f33eda4ee056245f77963e6_thumbnail_900x.webp",
            imgSrc2: "https://img.ltwebstatic.com/images3_pi/2021/10/25/16351479056954363f7b14523d1ab5d08f65c7947c_thumbnail_900x.webp",
            price: 24.99,
            description: "Palm Tree & Letter Graphic Tee "
        },
        {
            type: "T-Shirts",
            id: uuidv4(),
            imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/07/25/165871730994b00ecb74c947ec6deeb99ab2ba7517_thumbnail_900x.webp",
            imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/07/25/1658717307be89e6d873e7cfea351480b18762372a_thumbnail_900x.webp",
            price: 21.99,
            description: "Men Graphic Cartoon Tee"
        },
        {
            type: "T-Shirts",
            id: uuidv4(),
            imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/02/11/1644541565d89d1441fe628485da2a4563e75e2439_thumbnail_900x.webp",
            imgSrc2: "https://img.ltwebstatic.com/images3_pi/2021/11/29/163816492534218f9bf603871185925d431f417ccb_thumbnail_900x.webp",
            price: 24.99,
            description: "Men Mountain Print Tee"
        },
        {
            type: "T-Shirts",
            id: uuidv4(),
            imgSrc: "https://img.ltwebstatic.com/images3_pi/2022/04/18/16502751599968ed3e1529a9fbc9c77104cdf3e536_thumbnail_900x.webp",
            imgSrc2: "https://img.ltwebstatic.com/images3_pi/2022/04/17/16501859737a71cdc9aff344ea6274134700520b0a_thumbnail_900x.webp",
            price: 14.99,
            description: "Men Rose & Solgen Graphic Tee"
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