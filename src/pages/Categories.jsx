import React, { useState, useEffect, Suspense } from "react";
import { Row, Col } from "react-bootstrap";
// import ProductCard from "../Components/ProductCard";
import { useNavigate, useParams } from "react-router-dom";

const ProductCard = React.lazy(()=> import("../Components/ProductCard"))

function Categories() {
  const [products, setproducts] = useState([]);
  const { category } = useParams();
  // const {pathname} = useLocation()
  // const productcategory = pathname.split("categories/")[1]
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        data.length == 0 && navigate("*");
      });
      backToTop()
  }, [category]);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Row className="products_padding">
      {products.length !== 0 ?
        products.map((prod,index) => (
          <Col key={index} md={6} sm={6} xs={12} lg={3}>
          <Suspense fallback={<div className="loader product_item"><h4>Loading...</h4></div>}>
            <ProductCard
              prodDetails={prod}
              rating={prod.rating}
              price={prod.price}
              image={prod.image}
              title={prod.title}
            />
          </Suspense>
          </Col>
        )) : <div className="loader"><h4>Loading...</h4></div>}
    </Row>
  );
}

export default Categories;
