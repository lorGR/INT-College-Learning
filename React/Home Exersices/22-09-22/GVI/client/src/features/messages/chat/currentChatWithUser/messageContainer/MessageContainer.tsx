import axios from "axios"
import { useEffect, useRef } from "react"
import { User } from "../../Chat"
import { Message } from "../CurrentChatWithUser"
import MessageCard from "./messageCard/MessageCard"

interface MessageContainerProps {
    messages: Array<Message>
}

const MessageContainer: React.FC<MessageContainerProps> = ({ messages }) => {

    const bottomRef = useRef(null);

    useEffect(() => { 
        try {
            //@ts-ignore
            bottomRef.current.scrollIntoView({behavior: 'smooth'});
        } catch (error) {
            console.error(error);
        }
    }, [messages]);
    return (
        <div className="message-container">
            {messages?.map(message =>
                <MessageCard
                    key={message._id}
                    user={message.from}
                    message={message}
                />
            )}
            <div ref={bottomRef}></div>
        </div>
    )
}

export default MessageContainer