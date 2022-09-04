import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Secret } from "../../App";

interface SecretProps {
    secrets: Array<Secret>
}

const SecretGame: React.FC<SecretProps> = (props) => {

    const { secretId } = useParams();
    const [secret, setSecret] = useState<Secret>();
    const [life, setLife] = useState<number>(2);
    const [points, setPoints] = useState<number>(0);
    const [isWinnier, setIsWinner] = useState<string>("")

    useEffect(() => {
        const exsitSecret = props.secrets.find(secret => secret.id === secretId);
        if (exsitSecret) {
            setSecret(exsitSecret);
        } else {
            console.log(`Couldn't find secret with ${secretId} id`);
        }
    }, []);

    const handleClick = (e: any) => {
        try {
            const button = e.target;
            const statementId = e.target.id;
            const statement = secret?.statements.find(state => state.id === statementId);
            if (statement?.isTrue) {
                button.style.backgroundColor = "green";
                setLife(life - 1);
                setPoints(points + 1);
            } else {
                button.style.backgroundColor = "red";
                setLife(0);
            }
        } catch (error) {
            console.error(error);
        }
    }
    const lieState = secret?.statements.find(state => state.isTrue === false);
    const truthStates = secret?.statements.filter(state => state.isTrue === true);

    if (life > 0) {
        return (
            <div className="secret">
                <h1>Secret {secretId}</h1>
                <p>Guess the 2 correct statements</p>
                {secret?.statements.map(statement =>
                    <div className="secret__box" key={statement.id}>
                        <button id={statement.id} onClick={handleClick}>{statement.statement}</button>
                    </div>
                )}
            </div>
        );
    }
    return (
        <div>
            <h1>Game Over</h1>
            {points === 2 && <h2>You win</h2>}
            {points === 1 && <h2>Tie</h2>}
            {points === 0 && <h2>You Lost</h2>} 
            <h2>This was the lie</h2>
            <div className="secret__box">
                <button>{lieState?.statement}</button>
            </div>
            <h2>Those are the facts</h2>
            {truthStates?.map(state =>
                <div className="secret__box" key={state.id}>
                    <button>{state?.statement}</button>
                </div>
            )}
        </div>
    );

}

export default SecretGame;