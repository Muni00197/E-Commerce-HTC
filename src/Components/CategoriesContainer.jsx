import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import PropTypes from 'prop-types';

function CategoriesContainer(props) {
  const navigate = useNavigate();
  return (
    <section className='section_class'>
      <h6 style={{ textAlign: 'center', paddingBottom: '15px' }}>
        {props.title}
      </h6>
      <Row className='section_item'>
        {props.propsImages.map((img, index) => (
          <Col
            key={index}
            md={6}
            sm={6}
            xs={12}
            lg={3}
            style={{ paddingBottom: '10px' }}
          >
            <img alt='' src={img} height='250px' />
          </Col>
        ))}
      </Row>
      <br />
      <div style={{ textAlign: 'center' }}>
        <div
          className='section_link'
          style={{ textDecoration: 'none', cursor: 'pointer' }}
          onClick={() => navigate(props.goto)}
        >
          See more <AiOutlineRight size={20} />
        </div>
      </div>
    </section>
  );
}
CategoriesContainer.propTypes = {
  title: PropTypes.string,
  goto: PropTypes.string,
  propsImages: PropTypes.arrayOf(PropTypes.string),
};

export default React.memo(CategoriesContainer);
