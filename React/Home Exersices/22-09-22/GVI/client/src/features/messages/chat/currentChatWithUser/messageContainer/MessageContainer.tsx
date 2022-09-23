import { useEffect, useRef } from "react"
import { User } from "../../Chat"
import { Message } from "../CurrentChatWithUser"
import MessageCard from "./messageCard/MessageCard"

interface MessageContainerProps {
    messages: Array<Message>,
    loggedInUser: User,
    reciverUser: User
}

const MessageContainer: React.FC<MessageContainerProps> = ({ messages, loggedInUser, reciverUser }) => {

    const bottomRef = useRef(null);

    useEffect(() => {
        try {
            //@ts-ignore
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            console.error(error);
        }
    }, [messages]);
    return (
        <div className="message-container">
            {messages?.map(message => {
                return (
                    message.from._id === loggedInUser._id ?
                        <MessageCard
                            key={message._id}
                            user={message.from}
                            message={message}
                            sender={true}
                        /> :
                        <MessageCard
                            key={message._id}
                            user={message.from}
                            message={message}
                            sender={false}
                        />
                )
            }
            )}
            <div ref={bottomRef}></div>
        </div>
    )
}

export default MessageContainer