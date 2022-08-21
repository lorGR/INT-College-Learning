import { useEffect, useState } from "react";
import BreedCard from "./BreedCard";
import { getBreeds } from "./getBreeds";

export interface BreedCardProps {
    type:string
}

const Breeds = () => {
    const [breeds, setBreeds] = useState<string[]>([]);
    useEffect(() => {
        getBreeds().then(brds => {
            setBreeds(brds);
        });
    },[]);
    return (
        <div className="breeds">
            {breeds.map(breed => <BreedCard type={breed} />)}
        </div>
    );
}

export default Breeds;