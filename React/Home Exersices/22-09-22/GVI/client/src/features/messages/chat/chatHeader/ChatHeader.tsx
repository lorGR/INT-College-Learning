import { User } from "../Chat"

interface ChatHeaderProps {
    loggedInUser: User
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ loggedInUser }) => {
    return (
        <div className="chat-header">
            {loggedInUser.role === "mentee" && <h1>My Mentors</h1>}
            {loggedInUser.role === "mentor" && <h1>My Mentees</h1>}
        </div>
    )
}

export default ChatHeader