import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { Message } from "../../App";

interface ChatBoxProps {
    message: Message
}

const ChatBox: React.FC<ChatBoxProps> = (props) => {
    if (props.message.otherUser) {
        return (
            <div className="other-user-container">
                <div className="other-user">
                    <p className="other-user__message">{props.message.message}</p>
                    <div className="other-user__info">
                        <svg viewBox="0 0 16 15" width="16" height="15"><path fill="#97B0A4" d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg>
                        <p className="other-user__info__time">{props.message.dateTime}</p>
                    </div>
                </div>
            </div>

        );
    }
    return (
        <div className="chat-box">
            <p className="chat-box__message">{props.message.message}</p>
            <div className="chat-box__info">
                <p className="chat-box__info__time">{props.message.dateTime}</p>
                <svg viewBox="0 0 16 15" width="16" height="15"><path fill="#97B0A4" d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg>
            </div>
        </div>
    );
}

export default ChatBox;