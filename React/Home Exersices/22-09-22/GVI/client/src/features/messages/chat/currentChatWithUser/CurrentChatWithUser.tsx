import React from 'react'
import { User } from './../Chat';
import CurrentChatWithUserHeader from './currentChatWithUserHeader/CurrentChatWithUserHeader';
import MessageContainer from './messageContainer/MessageContainer';
import SendMessageForm from './sendMessageForm/SendMessageForm';

interface CurrentChatWithUserProps {
  loggedInUser: User,
  reciverUser: User
}

const CurrentChatWithUser: React.FC<CurrentChatWithUserProps> = ({ loggedInUser, reciverUser }) => {
  return (
    <div className='current-chat-with-user'>
      <CurrentChatWithUserHeader user={reciverUser} />
      <MessageContainer loggedInUser={loggedInUser} reciverUser={reciverUser} />
      <SendMessageForm loggedInUser={loggedInUser} reciverUser={reciverUser} />
    </div>
  )
}

export default CurrentChatWithUser;
