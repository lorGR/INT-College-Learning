import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { User } from "../../App";

interface SecretContainerProps {
    usersList: Array<User>
}

export interface Secret {
    id: string,
    statements: Array<Statement>,
    title: string
}

interface Statement {
    id: string,
    statement: string,
    isTrue: boolean
}

const secrets: Array<Secret> = [
    {
        id: "1",
        title: "Secret 1",
        statements: [
            {
                id: "1-1",
                statement: "When I was 4 years old my hair was blond",
                isTrue: false,
            },
            {
                id: "1-2",
                statement: "I am 23 years old with black hair",
                isTrue: true
            },
            {
                id: "1-3",
                statement: "When I was 18 years old my hair was blond",
                isTrue: true
            }
        ]
    },
    {
        id: "2",
        title: "Secret 2",
        statements: [
            {
                id: "2-1",
                statement: "When I was 4 years old my hair was blond",
                isTrue: false,
            },
            {
                id: "2-2",
                statement: "I am 23 years old with black hair",
                isTrue: true
            },
            {
                id: "2-3",
                statement: "When I was 18 years old my hair was blond",
                isTrue: true
            }
        ]
    },
    {
        id: "3",
        title: "Secret 3",
        statements: [
            {
                id: "3-1",
                statement: "When I was 4 years old my hair was blond",
                isTrue: false,
            },
            {
                id: "3-2",
                statement: "I am 23 years old with black hair",
                isTrue: true
            },
            {
                id: "3-3",
                statement: "When I was 18 years old my hair was blond",
                isTrue: true
            }
        ]
    },
]


const SecretsContainer: React.FC<SecretContainerProps> = (props) => {

    const [user, SetUser] = useState<User>();
    const { userId } = useParams()
    console.log(userId);
    useEffect(() => {
        const userConnected = props.usersList.find(userInList => userInList.id === userId)
        if (userConnected) {
            console.dir(userConnected);
            SetUser(userConnected);
        } else {
            console.log(`Couldn't find user with ${userId} id`);
        }
    }, []);

    const handleClickSecret = (seretId: string) => {
        try {
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="SecretContainer">
            <h1>Hello {user?.username}</h1>
        </div>
    );
}

export default SecretsContainer;