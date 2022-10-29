import './App.scss';
import Display from './features/display/Display';
import PostContainer from './features/postContainer/PostContainer';

function App() {
  return (
    <div className="App">
      <PostContainer />
      <Display />
    </div>
  );
}

export default App;
