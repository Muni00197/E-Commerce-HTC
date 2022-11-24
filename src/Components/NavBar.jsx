import React, { useState, useEffect } from "react";
import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import "../assets/styles/NavBar.scss";
import { Col, Row } from "react-bootstrap";

function NavBar() {
  const [menu, setmenu] = useState(false);
  const { pathname } = useLocation();
  const productcategory = pathname.includes("/categories")
    ? pathname.split("categories/")[1].replace("%20", " ")
    : "";
  const navigate = useNavigate();
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products/categories`)
      .then((res) => res.json())
      .then((json) => setcategories(json));
  }, []);

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Row className="nav_header" style={{ position: "absolute" }}>
          <Col className="menu_icon">
            <div className="menu_bar">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setmenu(!menu)}
              >
                <ImMenu size={20} /> &nbsp;<b>Menu</b>
              </span>
            </div>
          </Col>
          <Col className="tab_menu" xs={8}>
            <Row className="list_items">
              {categories.map((catgry,index) => (
                <Col
                  key={index}
                  onClick={() => navigate(`/categories/${catgry}`)}
                  className={`nav_links ${
                    productcategory == catgry ? "active_tab" : ""
                  }`}
                >
                  <span>{catgry}</span>
                </Col>
              ))}
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <div
        className={menu ? "sidenav_bar_open" : "sidenav_bar_close"}
        style={{ width: 250, position: "absolute", paddingTop: "100px" }}
      >
        <Sidenav defaultOpenKeys={["3", "4"]}>
          <Sidenav.Body>
            <Nav activeKey="1">
              <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                <div
                  onClick={() => navigate("/")}
                  style={{ textDecoration: "none" }}
                >
                  Home Page
                </div>
                <span onClick={() => setmenu(!menu)} style={{ float: "right" }}>
                  <IoMdClose size={30} />
                </span>
              </Nav.Item>
              <Nav.Menu eventKey="2" title="Categories" icon={<MagicIcon />}>
                {categories.map((catgry,index) => (
                  <Nav.Item
                    key={index}
                    eventKey="2-1"
                    icon={<AiOutlineRight size={15} />}
                    onClick={() => navigate(`/categories/${catgry}`)}
                  >
                    &nbsp;{catgry}
                  </Nav.Item>
                ))}
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </div>
  );
}

export default NavBar;
