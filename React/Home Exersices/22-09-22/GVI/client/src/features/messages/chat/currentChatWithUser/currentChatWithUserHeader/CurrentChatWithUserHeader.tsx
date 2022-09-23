import React from 'react'
import { User } from './../../Chat';

interface CurrentChatWithUserHeaderProps {
    user: User
}

const CurrentChatWithUserHeader:React.FC<CurrentChatWithUserHeaderProps> = ({user}) => {
  return (
    <div className='current-chat-with-user-header'>
        <div className='current-chat-with-user-header__img'></div>
        <div className='current-chat-with-user-header__user'>
            <h3>{user.firstName} {user.lastName}</h3>
        </div>
    </div>
  )
}

export default CurrentChatWithUserHeader