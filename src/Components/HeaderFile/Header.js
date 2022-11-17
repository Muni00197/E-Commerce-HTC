import React, { useState, useEffect } from "react";
import logo from "../../HTCGlobal_Services_Logo.jpg";
import {
  Row,
  Col,
  Container,
  Form,
  InputGroup,
  Button,
  Modal,
} from "react-bootstrap";
import "./Header.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { successOrder } from "../../redux/cart/cartActions";

function Header() {
  const [search, setsearch] = useState("");
  const [categories, setcategories] = useState([]);
  const [products, setproducts] = useState([]);
  const [showLogin, setshowLogin] = useState(false);
  const [username_err, setusername_err] = useState(false);
  const [password_err, setpassword_err] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const reduxState = useSelector((state) => state);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setcategories(json));

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        console.log(data);
      });
  }, []);

  const LoggedIn = () => {
    if (!username) {
      setusername_err(true);
    }
    if (!password_err) {
      setpassword_err(true);
    }
    if (username && password) {
      setshowLogin(!showLogin);
      Cookies.set("user_name", username);
      setusername("");
      setpassword("");
      setusername_err(false);
      setpassword_err(false);
    }
  };

  const signOut = () => {
    Cookies.remove("user_name");
    navigate("/");
    dispatch(successOrder());
    // setTimeout(() => {
    //       window.location.reload()
    // }, 1000);
  };

  const searchHandlur = (e) => {
    e.preventDefault();
    const mainProduct = products.filter(
      (val) =>
        val.title.toLocaleLowerCase().split(" ").join("") ==
        search.toLocaleLowerCase().split(" ").join("")
    );
    switch (search) {
      case "jewelery":
        navigate("/jewelery");
        setsearch("");
        break;
      case `men's clothing`:
        navigate("/mens_clothing");
        setsearch("");
        break;
      case `women's clothing`:
        navigate("/womens_clothing");
        setsearch("");
        break;
      case "electronics":
        navigate("/electronics");
        setsearch("");
        break;
      default:
        if (mainProduct.length !== 0) {
          navigate("/product_overview", {
            state: mainProduct[0],
          });
          setsearch("");
        } else {
          navigate("/");
        }
    }
  };
  return (
    <div className="header_main">
      <Row>
        <Col className="header_logo">
          <div>
            <Link to="/">
              <img src={logo} width="100px" height="40px" />
            </Link>
          </div>
        </Col>
        <Col xs={12} lg={6} className="header_searchbar">
          <form onSubmit={searchHandlur}>
            <InputGroup className="search_bar" size="sm">
              <Form.Control
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                list="searchValues"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
              />
              {search !== "" && (
                <datalist id="searchValues">
                  {categories.map((val) => (
                    <option>{val}</option>
                  ))}
                  {products.map((prod) => (
                    <option>{prod.title}</option>
                  ))}
                </datalist>
              )}
              <Button type="submit" variant="info" onClick={searchHandlur}>
                Search
              </Button>
            </InputGroup>
          </form>
        </Col>
        <Col className="header_basket">
          <Row className="make_center">
            <Col xs={8}>
              {Cookies.get("user_name") ? (
                <div style={{ color: "white" }}>
                  <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                    Hello{" "}
                  </span>{" "}
                  {Cookies.get("user_name")} &nbsp;
                  <Button
                    style={{ color: "white", zIndex: 7 }}
                    onClick={signOut}
                    size="sm"
                    variant="outline-info"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div style={{ textAlign: "end" }}>
                  <Button
                    style={{ color: "white", zIndex: "7" }}
                    onClick={() => setshowLogin(!showLogin)}
                    size="sm"
                    variant="outline-info"
                  >
                    Sign In
                  </Button>
                </div>
              )}
            </Col>
            <Col style={{ paddingTop: "5px" }}>
              <span
                style={{ color: "whitesmoke", cursor: "pointer" }}
                onClick={() => navigate("/cart_items")}
              >
                <AiOutlineShoppingCart size={20} />
                &nbsp;
                <span>
                  <b>Cart</b>&nbsp;
                  <div
                    style={{
                      height: "16px",
                      width: "16px",
                      backgroundColor: "whitesmoke",
                      display: "inline-block",
                      borderRadius: "50%",
                    }}
                  >
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      {reduxState.length}
                    </span>
                  </div>
                </span>
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        show={showLogin}
        centered
        backdrop="static"
        onHide={() => {
          setshowLogin(!showLogin);
          setusername("");
          setpassword("");
          setusername_err(false);
          setpassword_err(false);
        }}
        size="sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label style={{ paddingBottom: "10px" }}>Username</label>
          <input
            placeholder={username_err ? "Required" : ""}
            style={username_err ? { border: "1px solid red" } : null}
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
              setusername_err(false);
            }}
            type="text"
            className="form-control"
          />
          <br />
          <label style={{ paddingBottom: "10px" }}>Password</label>
          <input
            placeholder={password_err ? "Required" : ""}
            style={password_err ? { border: "1px solid red" } : null}
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
              setpassword_err(false);
            }}
            type="password"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ color: "white" }} onClick={LoggedIn} variant="info">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;
