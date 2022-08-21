import { BreedCardProps } from ".";


const BreedCard = ({ type }: BreedCardProps) => {
    return (
        <div className="breed-card">
            <h1>{type}</h1>
        </div>
    );
}

export default BreedCard;