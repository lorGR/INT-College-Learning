import { User } from "../../../Chat"
import { Message } from "../../CurrentChatWithUser";

interface MessageCardProps {
  user: User,
  message: Message,
  sender: boolean
}

const MessageCard: React.FC<MessageCardProps> = ({ user, message, sender }) => {
  return (
    <div className="message-card">
      {sender &&
        <div className="message-card__sender">
          <div className="message-card__sender__msg card">
            <p>{user.firstName} {user.lastName}</p>
            <p>{message.text}</p>
            <p>{message.time}</p>
          </div>
        </div>
      }
      {!sender &&
        <div className="message-card__reciever">
          <div className="message-card__reciever__msg card">
            <p>{user.firstName} {user.lastName}</p>
            <p>{message.text}</p>
            <p>{message.time}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default MessageCard