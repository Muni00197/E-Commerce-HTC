import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductItem from "../ProductDetails/ProductItem";

function MensClothing() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => json.filter((val) => val.category == `men's clothing`))
      .then((data) => {
        setproducts(data);
        console.log(data);
      });
  }, []);

  return (
    <Row className="products_padding">
      {products.length !== 0 &&
        products.map((prod) => (
          <Col>
            <ProductItem
              prodDetails={prod}
              rating={prod.rating}
              price={prod.price}
              image={prod.image}
              title={prod.title}
              description={prod.description}
            />
          </Col>
        ))}
    </Row>
  );
}

export default MensClothing;
