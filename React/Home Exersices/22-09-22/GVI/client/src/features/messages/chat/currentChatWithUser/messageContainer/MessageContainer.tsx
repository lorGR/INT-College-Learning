import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "../../Chat"
import MessageCard from "./messageCard/MessageCard"

interface MessageContainerProps {
    loggedInUser: User,
    reciverUser: User
}

export interface Message {
    _id: string
    from: User,
    to: User,
    time: string,
    text: string,
    read: boolean
}

const MessageContainer: React.FC<MessageContainerProps> = ({ loggedInUser, reciverUser }) => {

    const [messages, setMessages] = useState<Message[]>([])
    const [senderId, reciverId] = [loggedInUser._id, reciverUser._id];
    useEffect(() => {
        try {
            const getMessages = async () => {
                const { data } = await axios.post(
                    "/api/messages/getRecentMessagesByUserId",
                    { senderId, reciverId });
                if (!data) throw new Error("Couldn't recieve data from AXIOS POST: /api/messages/get/getRecentMessagesByUserId ")
                const { messagesDB } = data;
                console.log(messagesDB);
                setMessages(messagesDB);
            }
            getMessages();
        } catch (error) {
            console.error(error);
        }
    }, []);
    // TODO : Display Messages
    return (
        <div className="message-container">
            {messages.map(message =>
                <MessageCard
                    key={message._id}
                    user={message.from}
                    message={message}
                />
            )}
        </div>
    )
}

export default MessageContainer