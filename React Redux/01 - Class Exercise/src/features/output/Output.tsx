import { useAppSelector } from "../../app/hooks"
import { changeText, textSelector } from "../text/textSlice";

const Output = () => {

  const text = useAppSelector(textSelector);
  return (
    <p>{text.length > 0 ? text : "Some Default Text" }</p>
  )
}

export default Output