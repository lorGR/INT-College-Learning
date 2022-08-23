import './App.scss';
import SignIn from './features/signIn';
import SignUp from './features/signUp';

function App() {
  return (
    <div className="App container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
