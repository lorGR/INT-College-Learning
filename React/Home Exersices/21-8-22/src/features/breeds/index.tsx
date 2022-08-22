import { useEffect, useState } from "react";
import BreedCard from "./BreedCard";
import { getBreeds } from "./getBreeds";
import { getBreedsImage } from "./getBreedsImage";

export interface BreedCardProps {
    breed: BreedObject
}

interface BreedObject {
    breedName: string,
    breedImage: string
}

const Breeds = () => {
    const [breeds, setBreeds] = useState<BreedObject[]>([]);
    useEffect(() => {
        getBreeds().then(brds => {
            brds.forEach(brd => {
                getBreedsImage(brd).then(brdImg => {
                    setBreeds(prevState => ([...prevState, { breedName: brd, breedImage: brdImg}]))
                })
            });
        });
    }, []);
    console.log(breeds);
    return (
        <div className="breeds">
            {/* { breeds.map(breed => <BreedCard breed={breed} />)} */}
        </div>
    );
}

export default Breeds;