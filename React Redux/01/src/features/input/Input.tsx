import { useAppDispatch } from "../../app/hooks"
import { changeText } from "../text/textSlice"

const Input = () => {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeText(event.target.value));
  }

  return (
    <div>
      <input onChange={handleChange} type="text" placeholder="Enter some text" />
    </div>
  )
}

export default Input