import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { BiDollar } from "react-icons/bi";
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  successOrder,
} from "../redux/cart/cartActions";
import { BsCartXFill } from "react-icons/bs";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import Cookies from "js-cookie";
import { FcOk } from "react-icons/fc";
import { TbFaceIdError } from "react-icons/tb";
import { ReduxContext } from "../App";

function Cart() {
  const reduxState = useSelector((state) => state);
  const [ordersuccess, setordersuccess] = useState(false);
  const [login_alert, setlogin_alert] = useState(false);
  const { ContextState, ContextDispatch } = useContext(ReduxContext); //  state and dispatch value from context API
  const totalAmountArray =
    reduxState.length !== 0
      ? reduxState.map((val) => val.price * val.quantity)
      : [];
  const TotalAmount =
    totalAmountArray.length !== 0
      ? totalAmountArray.reduce((a, b) => a + b, 0)
      : 0;
  const dispatch = useDispatch();
  const placeOrder = () => {
    const user_name = Cookies.get("user_name");
    if (user_name) {
      setordersuccess(true);
      setlogin_alert(false);
      setTimeout(() => {
        setordersuccess(false);
        // dispatch(successOrder());
        ContextDispatch(successOrder());
      }, 2500);
    } else {
      setlogin_alert(true);
      setordersuccess(false);
      setTimeout(() => {
        setlogin_alert(false);
      }, 2500);
    }
  };
  return (
    <div className="products_overview">
      {console.log("state  from context", ContextState)}
      {reduxState.length !== 0 ? (
        <Row>
          <Col xs={9}>
            {reduxState.length !== 0 ? (
              reduxState.map((state,index) => (
                <div key={index}>
                  <Row>
                    <Col lg={6} sm={12} style={{ textAlign: "center" }}>
                      <img
                        width="80%"
                        src={state.image}
                        style={{ paddingRight: "25px" }}
                      />
                    </Col>
                    <Col>
                      <div style={{ minHeight: "180px" }}>
                        <h5>{state.title}</h5>
                        <p style={{ fontSize: "12px", paddingTop: "8px" }}>
                          {state.description}
                        </p>
                      </div>
                      <div style={{ minHeight: "100px" }}>
                        <span style={{ color: "#fcba03" }}>
                          <MdOutlineStarPurple500 size={20} />
                        </span>
                        &nbsp;
                        <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                          {state.rating.rate} / 5 &nbsp; &nbsp;
                        </span>
                        <span style={{ fontWeight: "bold", fontSize: "12px" }}>
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
                          {state.price} &#x2715; {state.quantity} ={" "}
                          <BiDollar size={20} />
                          {parseFloat(state.price * state.quantity).toFixed(2)}
                        </p>
                        <AiOutlineMinusSquare
                          onClick={() => dispatch(removeItemFromCart(state))}
                          size={25}
                        />{" "}
                        <b>{state.quantity}</b>{" "}
                        <AiOutlinePlusSquare
                          onClick={() => dispatch(addItemToCart(state))}
                          size={25}
                        />
                        &nbsp;
                        <Button
                          variant="outline-info"
                          size="sm"
                          onClick={() => dispatch(deleteItemFromCart(state))}
                        >
                          Remove
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <br />
                </div>
              ))
            ) : (
              <div></div>
            )}
          </Col>
          <Col style={{ textAlign: "start", paddingLeft: "100px" }}>
            <div>
              Orders :
              {reduxState.map((amount,index) => (
                <h6 key={index} style={{ paddingLeft: "65px" }}>
                  <BiDollar size={20} />
                  {parseFloat(amount.price * amount.quantity).toFixed(2)}
                </h6>
              ))}
            </div>
            <br />
            <h4
              style={{
                borderTop: " 2px solid gray",
                padding: "5px 0px 0px 10px",
              }}
            >
              Total : <BiDollar size={25} />
              {TotalAmount.toFixed(2)}
            </h4>
            <br />
            <div style={{ textAlign: "center" }}>
              <Button onClick={placeOrder} size="sm" variant="outline-info">
                Place Order
              </Button>
            </div>
          </Col>
        </Row>
      ) : (
        <div className="empty_cart_out">
          <div className="empty_cart_inner">
            {" "}
            <BsCartXFill size={35} /> &nbsp;Your Cart is Empty
          </div>
        </div>
      )}
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        size="sm"
        show={ordersuccess}
      >
        <div style={{ height: "100px" }}>
          <div style={{ textAlign: "center", paddingTop: "10px" }}>
            <FcOk size={40} />
          </div>
          <p className="order_success">Order Placed Successfully</p>
        </div>
      </Modal>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        size="sm"
        show={login_alert}
      >
        <div style={{ height: "100px" }}>
          <div
            style={{ textAlign: "center", paddingTop: "10px", color: "red" }}
          >
            <TbFaceIdError size={40} />
          </div>
          <p className="sign_in_alert">
            Please Sign In before placing the Order
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Cart;
