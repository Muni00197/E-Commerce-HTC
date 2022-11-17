import "./App.css";
import Header from "./Components/HeaderFile/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/rsuite.min.css";
import NavBar from "./Components/NavBarFolder/NavBar";
import "./global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jewelery from "./Components/Tabs/Jewelery";
import MensClothing from "./Components/Tabs/MensClothing";
import Electronices from "./Components/Tabs/Electronices";
import WomensClothing from "./Components/Tabs/WomensClothing";
import Home from "./Components/Home";
import ProductOverview from "./Components/ProductDetails/ProductOverview";
import store from "./redux/store";
import {Provider}  from 'react-redux'
import CartItemsFolder from "./Components/CartFolder/CartItemsFolder";
function App() {
  return (
    <Provider store={store}>
    <div>
      <Router>
        <div>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/electronics" element={<Electronices />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/mens_clothing" element={<MensClothing />} />
            <Route path="/womens_clothing" element={<WomensClothing />} />
            <Route path="/product_overview" element={<ProductOverview />} />
            <Route path="/cart_items" element={<CartItemsFolder />} />
          </Routes>
        </div>
      </Router>
    </div>
  </Provider>
  );
}

export default App;
