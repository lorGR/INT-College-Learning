import { useAppSelector } from "../../app/hooks";
import { textSelctor } from "./textSlice";

const TextContainer = () => {
    const text = useAppSelector(textSelctor);
    return (
        <div className="text-container">
            {text.text}
        </div>
    )
}

export default TextContainer;