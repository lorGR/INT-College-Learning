import { useEffect, useRef } from "react";
import { Message } from "../../App";
import ChatBox from "../ChatBox/ChatBox";

interface ScreenProps {
    messages: Array<Message>
}

const Screen: React.FC<ScreenProps> = (props) => {
    const messageEndRef = useRef(null);
    const scrollToBottom = () => {
        //@ts-ignore
        messageEndRef.current.scrollIntoView({ behavior:"smooth"});
    };
    useEffect(scrollToBottom,[props.messages]);
    return (
        <div className="screen">
            {props.messages.map((message,idx) => <ChatBox message={message} key={idx}/>)}
            <div ref={messageEndRef}></div>
        </div>
    );
}

export default Screen;