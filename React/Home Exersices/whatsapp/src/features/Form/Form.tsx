import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Message} from "../../App"; 
import { faChevronRight  } from "@fortawesome/free-solid-svg-icons";


interface FormProps {
    sendData: CallableFunction
}

const Form: React.FC<FormProps> = (props) => {

    const handleSendMessage = (e: React.FormEvent<HTMLFormElement> | any) => {
        try {
            e.preventDefault();
            if(e.target.elements.messageInput.value.length > 0) {
                const message : Message = {
                    message: e.target.elements.messageInput.value,
                    dateTime: `${new Date().getHours()}:${new Date().getMinutes()}`
                }
                props.sendData(message);
                e.target.elements.messageInput.value = '';
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form className="form" onSubmit={handleSendMessage}>
            <input className="form__input" type="text" placeholder="Type a message" name="messageInput"/>
            <button className="form__button" type="submit"><FontAwesomeIcon icon={faChevronRight} size="2x" color="#65747E" /></button>
        </form>
    );
}

export default Form;