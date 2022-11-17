import React from "react";
import {
  MdOutlineStarHalf,
  MdOutlineStarOutline,
  MdOutlineStarPurple500,
} from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { IoMdPeople } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/cartActions";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxState = useSelector((state) => state);
  const productsInCart =
    reduxState.length !== 0 ? reduxState.map((val) => val.id) : [];
  const addToCart = (Item) => {
    dispatch(addItemToCart(Item));
  };
  const overviewProduct = (details) => {
    navigate("/product_overview", {
      state: details,
    });
  };
  return (
    <div
      className="product_item"
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={props.image}
          height="120px"
          style={{ padding: "25px", paddingBottom: "15px", cursor: "pointer" }}
          onClick={() => overviewProduct(props.prodDetails)}
        />
      </div>
      <br />
      <div
        style={{ padding: "10px", height: "120px", cursor: "pointer" }}
        onClick={() => overviewProduct(props.prodDetails)}
      >
        <h6>{props.title}</h6>
        {/*<p>{props.description}</p>*/}
      </div>
      <div style={{ paddingBottom: "15px", paddingLeft: "15px" }}>
        <span style={{ color: "#fcba03" }}>
          <MdOutlineStarPurple500 size={20} />
        </span>
        &nbsp;
        <span style={{ fontWeight: "bold", fontSize: "12px" }}>
          {props.rating.rate} / 5 &nbsp; &nbsp;
        </span>
        <span style={{ fontWeight: "bold", fontSize: "12px" }}>
          <IoMdPeople size={25} /> {props.rating.count}
        </span>
        <p
          style={{
            paddingBottom: "15px",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          <BiDollar size={15} />
          {parseFloat(props.price).toFixed(2)}
        </p>
        {productsInCart.length !== 0 &&
        productsInCart.includes(props.prodDetails.id) ? (
          <Button
            size="sm"
            onClick={() => navigate("/cart_items")}
            variant="secondary"
          >
            Go to Cart
          </Button>
        ) : (
          <Button
            size="sm"
            onClick={() => addToCart(props.prodDetails)}
            variant="info"
            style={{ color: "white" }}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
