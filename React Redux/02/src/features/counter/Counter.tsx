import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increament, selectCounter } from "./counterSlice";

const Counter = () => {

  const dispatch = useAppDispatch();
  const counter = useAppSelector(selectCounter);
  
  const handleIncreament = () => {
    dispatch(increament());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  return (
    <div>
        {counter}
        <button onClick={handleIncreament}>+1</button>
        <button onClick={handleDecrement}>-1</button>
    </div>
  )
}

export default Counter;