import axios from 'axios';
import React, { useEffect, useState } from 'react'
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
  const [senderId, reciverId] = [loggedInUser._id, reciverUser._id];
  useEffect( () => {
    try {
      const getMessages = async () => {
        const { data } = await axios.post(
            "/api/messages/getRecentMessagesByUserId",
            { senderId, reciverId });  
        if (!data) throw new Error("Couldn't recieve data from AXIOS POST: /api/messages/get/getRecentMessagesByUserId ")
        const { messagesDB } = data;
        setMessages(messagesDB);
    }
    getMessages();
    } catch (error) {
      console.error(error);
    }
  },[]);

  return (
    <div className='current-chat-with-user'>
      <CurrentChatWithUserHeader user={reciverUser} />
      <MessageContainer messages={messages} loggedInUser={loggedInUser} reciverUser={reciverUser}/>
      <SendMessageForm loggedInUser={loggedInUser} reciverUser={reciverUser} setMessages={setMessages} messages={messages}/>
    </div>
  )
}

export default CurrentChatWithUser;
