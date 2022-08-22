import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BreedImage from "./BreedImage";
import { getBreedImages } from "./getBreedImages";


const Breed = () => {
    const {breedName} = useParams();
    const [breedImages, setImages] = useState<string[]>([]);
    useEffect(() => {
        getBreedImages(breedName).then(brdImgs => {
            setImages(brdImgs);
        })
    },[]);
    return (
        <div className="breed container">
            <h1>{breedName} Images:</h1>
            {breedImages.map(breedImage => <BreedImage imgSrc={breedImage}/>)}
        </div>
    );
}

export default Breed;