import "./App.css";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/rsuite.min.css";
import NavBar from "./Components/NavBar";
import "./assets/styles/global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./pages/Cart";
import { createContext } from "react";
import Categories from "./pages/Categories";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./Components/Footer";

export const ReduxContext = createContext();

function App() {
  const reduxStateContext = useSelector((state) => state);
  const reduxDispatchContext = useDispatch();
  return (
    <ReduxContext.Provider
      value={{
        ContextState: reduxStateContext,
        ContextDispatch: reduxDispatchContext,
      }}
    >
      <div>
        <Router>
          <div>
            <Header />
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories/:category" element={<Categories />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </Router>
        <Footer/>
      </div>
    </ReduxContext.Provider>
  );
}

export default App;
