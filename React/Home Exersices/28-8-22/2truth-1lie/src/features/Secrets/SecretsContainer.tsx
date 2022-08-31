import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Secret, User } from "../../App";

interface SecretContainerProps {
    usersList: Array<User>,
    secrets: Array<Secret>
}

const SecretsContainer: React.FC<SecretContainerProps> = (props) => {
    const [user, setUser] = useState<User>();
    const { userId } = useParams()

    useEffect(() => {
        const userConnected = props.usersList.find(userInList => userInList.id === userId)
        if (userConnected) {
            setUser(userConnected);
        } else {
            console.log(`Couldn't find user with ${userId} id`);
        }
    }, []);

    return (
        <div className="SecretContainer">
            <h1>Welcome {user?.username}</h1>
            <p>Take a look at my secrets</p>
            {props.secrets.map(secret =>
                <Link to={secret.id} key={secret.id}>
                    <h1>{secret.title}</h1>
                </Link>
            )}
        </div>
    );
}

export default SecretsContainer;