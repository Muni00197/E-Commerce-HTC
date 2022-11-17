import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

function Section(props) {
  return (
    <section
      className="section_class"
      style={props.bgcolor ? { backgroundColor: props.bgcolor } : null}
    >
      <h6 style={{ textAlign: "center", paddingBottom: "15px" }}>
        {props.title}
      </h6>
      <Row className="section_item">
        <Col md={6} sm={6} xs={12} lg={3} style={{ paddingBottom: "10px" }}>
          <img src={props.src1} height={props.height} />
        </Col>
        <Col md={6} sm={6} xs={12} lg={3} style={{ paddingBottom: "10px" }}>
          <img src={props.src2} height={props.height} />
        </Col>
        <Col md={6} sm={6} xs={12} lg={3} style={{ paddingBottom: "10px" }}>
          <img src={props.src3} height={props.height} />
        </Col>
        <Col xs={12} md={3} lg={3} style={{ paddingBottom: "10px" }}>
          <img src={props.src4} height={props.height} />
        </Col>
      </Row>
      <br />
      <div style={{ textAlign: "center" }}>
        <Link 
        className="section_link"
        style={{textDecoration:"none"}}
          to={props.goto}
        >
          See more <AiOutlineRight size={20} />
        </Link>
      </div>
    </section>
  );
}

export default Section;
