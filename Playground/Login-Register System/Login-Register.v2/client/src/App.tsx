import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './features/register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
