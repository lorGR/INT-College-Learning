import React from 'react';
import { useEffect } from 'react';
import ChatHeader from './chatHeader/ChatHeader';

interface ChatProps {
	userLoggedIn: string;
}

export interface User {
	email: string,
	firstName: string,
	lastName: string,
	password: string,
	role: string
}

function Chat() {
	// TODO: in useEffect, get the logged in user, when the function will be written

	const loggedInUser:User = {
		email: "gili@gmail.com",
		firstName: "Gili",
		lastName: "Menahem",
		password: "12345",
		role: "mentor"
	}

	const user:User = {
		email: "lior@gmail.com",
		firstName: "Lior",
		lastName: "Grishin",
		password: "12345",
		role: "mentee",
	}


	return (
		<div>
			<ChatHeader loggedInUser={loggedInUser} />
			{/* <CurrentChatWithUser /> */}
				{/* <CurrentChatUser  userId /> */}
				{/* <MessageContainer  userId userLoggedIn  /> */}
				{/* <SendMessage userId userLoggedIn state /> */}
			{/* <OtherUserChat /> */}
				{/* <SearchMyUsers /> */}
				{/* <MyMentees /> */} {/* OR */} {/* <MyMentors /> */}
		</div>
	);
}

export default Chat;
