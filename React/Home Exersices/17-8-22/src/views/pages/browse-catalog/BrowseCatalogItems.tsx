import tshirts from "../../assets/images/tshirts.png";
import longSleeves from "../../assets/images/longSleeves.png";
import sweaters from "../../assets/images/sweaters.png";
import buttonDown from "../../assets/images/buttonDown.png";
import knitwears from "../../assets/images/knitwears.png";
import jackets from "../../assets/images/jackets.png";
import hoodies from "../../assets/images/hoodies.png";
import coats from "../../assets/images/coats.png";

import cargoPants from "../../assets/images/cargoPants.png";
import sweatPants from "../../assets/images/sweatPants.png";
import jeans from "../../assets/images/jeans.png";
import skinnyJeans from "../../assets/images/skinnyJeans.png";
import suitPants from "../../assets/images/suitPants.png";
import shorts from "../../assets/images/shorts.png";
import activeShorts from "../../assets/images/activeShorts.png";
import sportsPants from "../../assets/images/sportsPants.png";
import sleepingPants from "../../assets/images/sleepingPants.png";
import sweammingPants from "../../assets/images/sweammingPants.png";

interface BrowseCatalogItems {
    type: string
}

const BrowseCatalogItems = ({ type }: BrowseCatalogItems) => {
    let imgUrl;
    if (type === "T-Shirts") {
        imgUrl = tshirts;
    } else if (type === "Long Sleeves") {
        imgUrl = longSleeves;
    } else if (type === "Sweaters") {
        imgUrl = sweaters;
    } else if (type === "Button Down") {
        imgUrl = buttonDown;
    } else if (type === "Knitwears") {
        imgUrl = knitwears;
    } else if (type === "Jackets") {
        imgUrl = jackets;
    } else if (type === "Hoodies") {
        imgUrl = hoodies;
    } else if (type === "Coats") {
        imgUrl = coats;
    } else if (type === "Cargo Pants") {
        imgUrl = cargoPants;
    } else if (type === "Sweatpants") {
        imgUrl = sweatPants;
    } else if (type === "Jeans") {
        imgUrl = jeans;
    } else if (type === "Skinny Jeans") {
        imgUrl = skinnyJeans;
    } else if (type === "Suit Pants") {
        imgUrl = suitPants;
    } else if (type === "Shorts") {
        imgUrl = shorts;
    } else if (type === "Active Shorts") {
        imgUrl = activeShorts;
    } else if (type === "Sport Pants") {
        imgUrl = sportsPants;
    } else if (type === "Sleeping Pants") {
        imgUrl = sleepingPants;
    } else if (type === "Sweamming Pants") {
        imgUrl = sweammingPants;
    }
        return (
            <div className="browse-catalog__item">
                <p>{type}</p>
                <img src={imgUrl} alt={imgUrl} />
            </div>
        );
}

export default BrowseCatalogItems;