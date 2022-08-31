import { Secret } from "./SecretsContainer";

interface SecretProps {
    secret: Secret
}

const Secret: React.FC<SecretProps> = ({secret}) => {
    return (
        <div className="secret">
            <h1>Welcome To {secret.title}</h1>
            <p>Guess the 2 correct statements!</p>
            {secret.statements.map(state => <div>{state.statement}</div>)}
        </div>
    );
}

export default Secret;