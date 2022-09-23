import React, { useState } from 'react'
import { User } from './../Chat';
import CurrentChatWithUserHeader from './currentChatWithUserHeader/CurrentChatWithUserHeader';
import MessageContainer from './messageContainer/MessageContainer';
import SendMessageForm from './sendMessageForm/SendMessageForm';

interface CurrentChatWithUserProps {
  loggedInUser: User,
  reciverUser: User
}

export interface Message {
  _id: string
  from: User,
  to: User,
  time: string,
  text: string,
  read: boolean
}

const CurrentChatWithUser: React.FC<CurrentChatWithUserProps> = ({ loggedInUser, reciverUser }) => {

  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div className='current-chat-with-user'>
      <CurrentChatWithUserHeader user={reciverUser} />
      <MessageContainer loggedInUser={loggedInUser} reciverUser={reciverUser} setMessages={setMessages} messages={messages} />
      <SendMessageForm loggedInUser={loggedInUser} reciverUser={reciverUser} setMessages={setMessages} messages={messages}/>
    </div>
  )
}

export default CurrentChatWithUser;
