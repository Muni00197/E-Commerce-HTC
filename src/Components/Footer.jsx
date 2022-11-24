import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/images/HTCGlobal_Services_Logo.jpg";
function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <hr style={{ height: "1px", backgroundColor: "#232F3E" }} />
      <div
        style={{
          minHeight: "320px",
          backgroundColor: "#232F3E",
        }}
      >
        <div className="back_to_top" onClick={backToTop}>
          Back to Top
        </div>
        <Row style={{ textAlign: "center", paddingTop: "40px" }}>
          <Col md={6} sm={6} xs={12} lg={3}>
            <ul className="footer_data">
              <h6> Get to Know Us</h6>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </Col>
          <Col md={6} sm={6} xs={12} lg={3}>
            <ul className="footer_data">
              <h6> Connect with Us</h6>
              <li>FaceBook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </Col>
          <Col md={6} sm={6} xs={12} lg={3}>
            <ul className="footer_data">
              <h6> Make Money with Us</h6>
              <li>Sell on HTC</li>
              <li>HTC Global Selling</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by HTC</li>
              <li>Advertise Your Products</li>
              <li>HTC Pay on Merchant</li>
            </ul>
          </Col>
          <Col md={6} sm={6} xs={12} lg={3}>
            <ul className="footer_data">
              <h6>Let Us Help You</h6>
              <li>COVID-19 and HTC</li>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>HTC App Download</li>
              <li>HTC Assistant Download</li>
              <li>Help</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <div style={{ display: "grid", placeItems: "center" }}>
          <img alt="" src={logo} width="100px" height="40px" />
        </div>
        <br />
      </div>
    </div>
  );
}

export default Footer;
