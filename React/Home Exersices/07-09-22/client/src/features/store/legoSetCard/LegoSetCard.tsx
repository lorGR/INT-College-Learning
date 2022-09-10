
interface LegoSetProps {
    setName:string,
    price:string,
    imgSrc:string
}

export const LegoSetCard = ({setName, price, imgSrc}:LegoSetProps) => {
    return (
        <div>
            <div>
                <img src={imgSrc} alt={setName} />
                <h2>{setName}</h2>
                <h3>Price: {price}$</h3>
            </div>
        </div>
    );
};