import axios from "axios"
import React from "react"
import { User } from "../../Chat"

interface SendMessageFormProps {
    loggedInUser: User
    reciverUser: User
}

const SendMessageForm: React.FC<SendMessageFormProps> = ({ loggedInUser, reciverUser }) => {

    const [senderId, receiverId, type] = [loggedInUser._id, reciverUser._id, "message"];

    const handleSendMessage = async (event: React.FormEvent<HTMLFormElement> | any) => {
        try {
            event.preventDefault();

            const text = event.target.elements.userMessage.value;
            console.log(text);
            const { data } = await axios.post("/api/messages/sendMessage", {senderId, receiverId, type, text} );
            if(!data) throw new Error("Couldn't recieve data from AXIOS POST: /api/messages/sendMessage");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="send-message-form">
            <form onSubmit={handleSendMessage}>
                <input type="text" name="message" id="userMessage" placeholder="Type a message" />
                <button type="submit">^</button>
            </form>
        </div>
    )
}

export default SendMessageForm
