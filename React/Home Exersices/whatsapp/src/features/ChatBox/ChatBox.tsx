import { Message } from "../../App";

interface ChatBoxProps {
    message: Message
}

const ChatBox: React.FC<ChatBoxProps> = (props) => {
    return (
        <div className="chat-box">
            <p className="chat-box__message">{props.message.message}</p>
            <p className="chat-box__time">{props.message.dateTime}</p>
        </div>
    );
}

export default ChatBox;