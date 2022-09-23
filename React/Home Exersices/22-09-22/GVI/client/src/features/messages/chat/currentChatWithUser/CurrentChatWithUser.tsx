import React from 'react'
import { User } from './../Chat';
import CurrentChatWithUserHeader from './currentChatWithUserHeader/CurrentChatWithUserHeader';

interface CurrentChatWithUserProps {
    userLoggedIn: User,
    reciverUser:User
}

const CurrentChatWithUser = () => {
  return (
    <div className='current-chat-with-user'>
        <CurrentChatWithUserHeader user={}/>

    </div>
  )
}
