import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import CategoriesContainer from "../Components/CategoriesContainer";
import { useNavigate } from "react-router-dom";
import { carouselImages, categoriesImages } from "../assets/images/images";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="carousel_tab">
      <Carousel nextIcon="" prevIcon="" interval={2000}>
        <Carousel.Item onClick={() => navigate("/categories/electronics")}>
          <img
            className="d-block w-100"
            src={carouselImages[1]}
            alt="First slide"
          />
          <Carousel.Caption style={{ fontWeight: "bold" }}>
            Electronices
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={() => navigate("/categories/jewelery")}>
          <img
            className="d-block w-100"
            src={carouselImages[2]}
            alt="Second slide"
          />
          <Carousel.Caption style={{ fontWeight: "bold" }}>
            Jewelery
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={() => navigate("/categories/men's clothing")}>
          <img
            className="d-block w-100"
            src={carouselImages[3]}
            alt="Third slide"
          />
          <Carousel.Caption style={{ fontWeight: "bold" }}>
            Men's Clothing
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={() => navigate("/categories/women's clothing")}>
          <img
            className="d-block w-100"
            src={carouselImages[4]}
            alt="Fourth slide"
          />
          <Carousel.Caption style={{ fontWeight: "bold" }}>
            Women's Clothing
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {categoriesImages.map((data,index) => (
        <div key={index}>
          <CategoriesContainer
            propsImages={data.images}
            goto={`/categories/${data.title}`}
            title={data.title}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
