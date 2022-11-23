import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { IoMdPeople } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cart/cartActions";
import PropTypes from "prop-types";

const ProductCard = (props) => {
  const { prodDetails, rating, price, image, title } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxState = useSelector((state) => state);
  const productsInCart =
    reduxState.length !== 0 ? reduxState.map((val) => val.id) : [];
  const addToCart = (Item) => {
    dispatch(addItemToCart(Item));
  };
  const overviewProduct = (details) => {
    navigate(`/product/${details.id}`);
  };
  return (
    <div className="product_item">
      <div style={{ textAlign: "center" }}>
        <img
          src={image}
          height="120px"
          style={{ padding: "25px", paddingBottom: "15px", cursor: "pointer" }}
          onClick={() => overviewProduct(prodDetails)}
        />
      </div>
      <br />
      <div
        style={{ padding: "10px", height: "120px", cursor: "pointer" }}
        onClick={() => overviewProduct(prodDetails)}
      >
        <h6>{title}</h6>
      </div>
      <div style={{ paddingBottom: "15px", paddingLeft: "15px" }}>
        <span style={{ color: "#fcba03" }}>
          <MdOutlineStarPurple500 size={20} />
        </span>
        &nbsp;
        <span style={{ fontWeight: "bold", fontSize: "12px" }}>
          {rating.rate} / 5 &nbsp; &nbsp;
        </span>
        <span style={{ fontWeight: "bold", fontSize: "12px" }}>
          <IoMdPeople size={25} /> {rating.count}
        </span>
        <p
          style={{
            paddingBottom: "15px",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          <BiDollar size={15} />
          {parseFloat(price).toFixed(2)}
        </p>
        {productsInCart.length !== 0 &&
        productsInCart.includes(prodDetails.id) ? (
          <Button
            size="sm"
            onClick={() => navigate("/cart")}
            variant="secondary"
          >
            Go to Cart
          </Button>
        ) : (
          <Button
            size="sm"
            onClick={() => addToCart(prodDetails)}
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

ProductCard.propTypes = {
  prodDetails: PropTypes.object,
  rating: PropTypes.object,
  price: PropTypes.number,
  image: PropTypes.string, 
  title: PropTypes.string,
};

export default React.memo(ProductCard);
