import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './App.css';

import Navbar from "./views/components/Navbar";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Navbar/>
          {/* <Route path="/" element={<Navbar />}/> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
