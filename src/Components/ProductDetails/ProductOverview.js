import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { BiDollar } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { Button } from "react-bootstrap";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/cart/cartActions";

const ProductOverview = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxState = useSelector((state) => state);
  const productsInCart =
    reduxState.length !== 0 ? reduxState.map((val) => val.id) : [];
  const addToCart = () => {
    dispatch(addItemToCart(state));
  };
  return (
    <div className="products_overview">
      <Row>
        <Col lg={6} sm={12} style={{ display: "grid", placeItems: "center" }}>
          <img className="products_overview_img" width="50%" src={state.image} style={{ paddingRight: "25px" }} />
          {console.log("received ", state)}
        </Col>
        <Col>
          <div style={{ minHeight: "250px" }}>
            <h3>{state.title}</h3>
            <p>{state.description}</p>
          </div>
          <div style={{ minHeight: "150px" }}>
            <span style={{ color: "#fcba03" }}>
              <MdOutlineStarPurple500 size={20} />
            </span>
            &nbsp;
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              {state.rating.rate} / 5 &nbsp; &nbsp;
            </span>
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              <IoMdPeople size={25} /> {state.rating.count}
            </span>
            <p
              style={{
                paddingBottom: "15px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              <BiDollar size={20} />
              {parseFloat(state.price).toFixed(2)}
            </p>
            {productsInCart.length !== 0 &&
            productsInCart.includes(state.id) ? (
              <Button
                size="md"
                onClick={() => navigate("/cart_items")}
                variant="secondary"
              >
                Go to Cart
              </Button>
            ) : (
              <Button size="md" onClick={addToCart} variant="info">
                Add to Cart
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductOverview;
