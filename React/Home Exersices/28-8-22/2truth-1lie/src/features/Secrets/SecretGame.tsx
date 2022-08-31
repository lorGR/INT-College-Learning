import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Secret } from "../../App";

interface SecretProps {
    secrets: Array<Secret>
}

const SecretGame: React.FC<SecretProps> = (props) => {

    const { secretId } = useParams();
    const [secret , setSecret] = useState<Secret>();

    useEffect(() => {
        const exsitSecret = props.secrets.find( secret => secret.id === secretId);
        if(exsitSecret) {
            setSecret(exsitSecret);
        } else {
            console.log(`Couldn't find secret with ${secretId} id`);
        }
    },[]);
    
    const handleClick = (e: any) => {
        try {
            const button = e.target;
            const statementId = e.target.id;
            const statement = secret?.statements.find(state => state.id === statementId);
            if(statement?.isTrue) {
                button.style.backgroundColor = "green";
            } else {
                button.style.backgroundColor = "red";
            }
        } catch (error) {
            console.error(error);
        }
    }

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

export default SecretGame;