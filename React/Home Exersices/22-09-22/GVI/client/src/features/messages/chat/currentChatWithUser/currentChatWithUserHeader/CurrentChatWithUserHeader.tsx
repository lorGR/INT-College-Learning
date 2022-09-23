import React from 'react'
import { User } from './../../Chat';

interface CurrentChatWithUserHeaderProps {
    user: User
}

const CurrentChatWithUserHeader:React.FC<CurrentChatWithUserHeaderProps> = ({user}) => {
  return (
    <div className='current-chat-with-user-header'>
        <div className='current-chat-with-user-header__img'></div>
        <div>
            <h3></h3>
        </div>
    </div>
  )
}

export default CurrentChatWithUserHeader