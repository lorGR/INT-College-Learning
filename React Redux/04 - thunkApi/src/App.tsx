import './App.css';
import { useAppDispatch } from './app/hooks';
import { getJoke } from './features/textContainer/textAPI';
import TextContainer from './features/textContainer/TextContainer';
import { changeText } from './features/textContainer/textSlice';


function App() {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    try {
      dispatch(getJoke());
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <TextContainer />
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default App;
