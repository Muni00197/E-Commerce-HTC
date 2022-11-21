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
import ErrorBoundary from "./Components/ErrorBoundary";

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
          <ErrorBoundary>
            <Header name='error1' />
          </ErrorBoundary>
          <ErrorBoundary>
            <NavBar />
          </ErrorBoundary>
            <Routes>
              <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
              <Route path="/categories/:category" element={<ErrorBoundary><Categories /></ErrorBoundary>} />
              <Route path="/product/:id" element={<ErrorBoundary><Product /></ErrorBoundary>} />
              <Route path="/cart" element={<ErrorBoundary><Cart /></ErrorBoundary>} />
              <Route path="*" element={<ErrorBoundary><PageNotFound /></ErrorBoundary>} />
            </Routes>
          </div>
        </Router>
        <Footer/>
      </div>
    </ReduxContext.Provider>
  );
}

export default App;
