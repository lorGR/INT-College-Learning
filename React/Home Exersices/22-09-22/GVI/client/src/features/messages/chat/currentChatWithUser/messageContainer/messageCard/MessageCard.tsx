import { User } from "../../../Chat"
import { Message } from "../MessageContainer"

interface MessageCardProps {
    user: User,
    message: Message
}

const MessageCard: React.FC<MessageCardProps> = ({ user, message }) => {
  return (
    <div className="message-card">
        <p>{user.firstName} {user.lastName}</p>
        <p>{message.text}</p>
        <p>{message.time}</p>
    </div>
  )
}

export default MessageCard