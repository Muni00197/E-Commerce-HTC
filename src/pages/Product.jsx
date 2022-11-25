import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { BiDollar } from 'react-icons/bi';
import { IoMdPeople } from 'react-icons/io';
import { Button } from 'react-bootstrap';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/cart/cartActions';
import _ from 'lodash';

const Product = () => {
  const { id } = useParams();
  // const productId = pathname.split('product/')[1]
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products/${id}`)
      .then((res) => res.json())
      .then((json) => setdata(json));
  }, [id]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxState = useSelector((state) => state);
  const productsInCart =
    reduxState.length !== 0 ? reduxState.map((val) => val.id) : [];
  const addToCart = () => {
    dispatch(addItemToCart(data));
  };
  return (
    <div className='products_overview'>
      {Object.keys(data).length !== 0 ? (
        <Row>
          <Col lg={6} sm={12} style={{ display: 'grid', placeItems: 'center' }}>
            <img
              alt=''
              width='50%'
              src={data.image}
              style={{ paddingRight: '25px' }}
            />
          </Col>
          <Col>
            <div style={{ minHeight: '250px' }}>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
            <div style={{ minHeight: '150px' }}>
              <span style={{ color: '#fcba03' }}>
                <MdOutlineStarPurple500 size={20} />
              </span>
              &nbsp;
              <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
                {data?.rating?.rate} / 5 &nbsp; &nbsp;
              </span>
              <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
                <IoMdPeople size={25} /> {data?.rating?.count}
              </span>
              <p
                style={{
                  paddingBottom: '15px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                }}
              >
                <BiDollar size={20} />
                {parseFloat(data.price).toFixed(2)}
              </p>
              {productsInCart.length !== 0 &&
              _.includes(productsInCart, data.id) ? (
                <Button
                  size='md'
                  onClick={() => navigate('/cart')}
                  variant='secondary'
                >
                  Go to Cart
                </Button>
              ) : (
                <Button size='md' onClick={addToCart} variant='info'>
                  Add to Cart
                </Button>
              )}
            </div>
          </Col>
        </Row>
      ) : (
        <div className='loader'>
          <h4>Loading...</h4>
        </div>
      )}
    </div>
  );
};

export default Product;
