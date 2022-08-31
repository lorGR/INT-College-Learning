import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../App";

interface SecretContainerProps {
    usersList : Array<User>
}

const SecretsContainer: React.FC<SecretContainerProps> = (props) => {

    const [user, SetUser] = useState<User>();
    const {userId} = useParams()
    console.log(userId);
    useEffect(() => {
        const userConnected = props.usersList.find(userInList => userInList.id === userId)
        if(userConnected) {
            console.dir(userConnected);
            SetUser(userConnected);
        } else {
            console.log(`Couldn't find user with ${userId} id`);
        }
    },[]);

    return(
        <div className="SecretContainer">
            <h1>Hello {user?.username}</h1>
            <p>This is the SecretContainer</p>
        </div>
    );
} 

export default SecretsContainer;