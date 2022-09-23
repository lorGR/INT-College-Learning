import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "../../Chat"
import { Message } from "../CurrentChatWithUser"
import MessageCard from "./messageCard/MessageCard"

interface MessageContainerProps {
    loggedInUser: User,
    reciverUser: User,
    setMessages: CallableFunction,
    messages: Array<Message>
}

const MessageContainer: React.FC<MessageContainerProps> = ({ loggedInUser, reciverUser, messages, setMessages}) => {

    const [senderId, reciverId] = [loggedInUser._id, reciverUser._id];
    useEffect(() => {
        try {
            const getMessages = async () => {
                const { data } = await axios.post(
                    "/api/messages/getRecentMessagesByUserId",
                    { senderId, reciverId });
                if (!data) throw new Error("Couldn't recieve data from AXIOS POST: /api/messages/get/getRecentMessagesByUserId ")
                const { messagesDB } = data;
                setMessages(messagesDB)
            }
            getMessages();
        } catch (error) {
            console.error(error);
        }
    }, []);
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