import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
import Section from "./Section";
import { useNavigate } from "react-router-dom";

function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="carousel_tab">
      <Carousel nextIcon="" prevIcon="" interval={2000}>
        <Carousel.Item onClick={() => navigate("/electronics")}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
            alt="First slide"
          />
          <Carousel.Caption style={{ fontWeight: "bold" }}>
            Electronices
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={() => navigate("/jewelery")}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71gXU0STdmL._SX3000_.jpg"
            alt="Second slide"
          />
          <Carousel.Caption style={{ fontWeight: "bold" }}>
            Jewelery
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={() => navigate("/mens_clothing")}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/618B1HnAxLL._SX3000_.jpg"
            alt="Third slide"
          />
          <Carousel.Caption style={{ fontWeight: "bold" }}>
            Men's Clothing
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={() => navigate("/womens_clothing")}>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/81aT2OXPsCL._SX3000_.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption style={{ fontWeight: "bold" }}>
            Women's Clothing
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Section
        src1="https://m.media-amazon.com/images/G/31/img21/CEPC/Electronics/Revamp/SBC/xcm_banners_02_sbc_v1_564x564_in-en._SS275_QL85_.jpg"
        src2="https://m.media-amazon.com/images/G/31/img21/CEPC/Electronics/Revamp/SBC/xcm_banners_06_sbc_v1_564x564_in-en._SS330_QL85_.jpg"
        src3="https://m.media-amazon.com/images/G/31/img21/CEPC/Electronics/Revamp/SBC/xcm_banners_13_sbc_v1_564x564_in-en._SS275_QL85_.jpg"
        src4="https://m.media-amazon.com/images/G/31/img21/CEPC/Electronics/Revamp/xcm_banners_01_feb22_564x564_in-en._SS330_QL85_.jpg"
        height="250px"
        goto="/electronics"
        title="Electronics"
      />
      <Section
        src1="https://m.media-amazon.com/images/G/31/img21/MA2022/Winterflip1/P0/SBC/p0-SBC_01._SY530_QL85_.jpg"
        src2="https://m.media-amazon.com/images/G/31/img21/MA2022/Winterflip1/P0/SBC/p0-SBC_02._SY530_QL85_.jpg"
        src3="https://m.media-amazon.com/images/G/31/img21/MA2022/Winterflip1/P0/SBC/p0-SBC_03._SY530_QL85_.jpg"
        src4="https://m.media-amazon.com/images/G/31/img21/MA2022/Winterflip1/P0/SBC/p0-SBC_06._SY530_QL85_.jpg"
        height="250px"
        bgcolor="whitesmoke"
        goto="/mens_clothing"
        title="Men's Clothing"
      />
      <Section
        src1="https://m.media-amazon.com/images/G/31/img22/Fashion/XCM/MFA/1._SY530_QL85_.jpg"
        src2="https://m.media-amazon.com/images/G/31/img22/Fashion/XCM/MFA/2._SY530_QL85_.jpg"
        src3="https://m.media-amazon.com/images/G/31/img22/Fashion/XCM/MFA/3._SY530_QL85_.jpg"
        src4="https://m.media-amazon.com/images/G/31/img22/Fashion/XCM/MFA/8._SY530_QL85_.jpg"
        height="230px"
        goto="/womens_clothing"
        title="Women's Clothing"
      />
      <Footer />
    </div>
  );
}

export default Home;
