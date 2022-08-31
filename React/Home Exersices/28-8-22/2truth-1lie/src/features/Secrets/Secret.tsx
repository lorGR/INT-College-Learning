import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Secret } from "../../App";

interface SecretProps {
    secrets: Array<Secret>
}

const Secret: React.FC<SecretProps> = (props) => {

    const { secretId } = useParams();
    const [secret , setSecret] = useState<Secret>();
    useEffect(() => {
        const exsitSecret = props.secrets.find( secret => secret.id === secretId);
        if(exsitSecret) {
            setSecret(exsitSecret);
        } else {
            console.log(`Couldn't find secret with ${secretId} id`);
        }
    },[])
    return (
        <div className="secret">
            <h1>Secret {secretId}</h1>
            <p>Guess the 2 correct statements</p>

        </div>
    );
}

export default Secret;