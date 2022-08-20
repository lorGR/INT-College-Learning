import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Main from "./views/pages/main/main";

import './App.scss';
import Home from "./views/pages/home/Home";
import Cart from "./views/pages/cart/Cart";
import Profile from "./views/pages/profile/Profile";
import BrowseCatalog from "./views/components/BrowseCatalog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route index element={<Home />} /> 
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="tops" element={<BrowseCatalog type="tops"/>} />
          <Route path="bottoms" element={<BrowseCatalog type="bottoms"/>} />
          <Route path="shoes" element={<BrowseCatalog type="shoes"/>} />
          <Route path="socks" element={<BrowseCatalog type="socks"/>} />
          <Route path="jewellery" element={<BrowseCatalog type="jewellery"/>} />
          <Route path="sunglasses" element={<BrowseCatalog type="sunglasses"/>} />
          <Route path="backpacks" element={<BrowseCatalog type="backpacks"/>} />
          <Route path="belts" element={<BrowseCatalog type="belts"/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
