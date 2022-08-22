import { BreedCardProps } from ".";


const BreedCard = ({ breed }: BreedCardProps) => {
    return (
        <div className="breed-card">
            <h1>{breed.breedName}</h1>
        </div>
    );
}

export default BreedCard;