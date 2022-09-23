import ChatHeader from './chatHeader/ChatHeader';
import CurrentChatWithUser from './currentChatWithUser/CurrentChatWithUser';

// interface ChatProps {
// 	userLoggedIn: string;
// }

export interface User {
	_id: string,
	email: string,
	firstName: string,
	lastName: string,
	password: string,
	role: string
}

function Chat() {
	// TODO: in useEffect, get the logged in user, when the function will be written

	const loggedInUser: User = {
		_id: "632dd74112237a27179c9102",
		email: "gili@gmail.com",
		firstName: "Gili",
		lastName: "Menahem",
		password: "12345",
		role: "mentor"
	}

	const user: User = {
		_id: "632dd63612237a27179c9100",
		email: "lior@gmail.com",
		firstName: "Lior",
		lastName: "Grishin",
		password: "12345",
		role: "mentee",
	}


	return (
		<div className='chat'>
			<div className="container">
				<div className="chat-header-grid">
					<ChatHeader loggedInUser={loggedInUser} />
				</div>
				<div className="available-users-chat-grid">
					{/* AvailableUsersChat */}
					{/* <SearchMyUsers /> */}
					{/* <MyMentees /> */} {/* OR */} {/* <MyMentors /> */}
				</div>
				<div className="current-chat-with-user-grid">
					<CurrentChatWithUser loggedInUser={loggedInUser} reciverUser={user} />
				</div>
			</div>
		</div>
	);
}

export default Chat;
