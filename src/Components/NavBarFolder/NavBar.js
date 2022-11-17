import React, { useState } from "react";
import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import { ImMenu } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTshirt } from "react-icons/fa";
import { GiShirt, GiHeartNecklace } from "react-icons/gi";
import { AiOutlineDesktop, AiFillHome } from "react-icons/ai";
import "./NavBar.scss";
import { Col, Row } from "react-bootstrap";

function NavBar() {
  const [menu, setmenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
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
              <Col
                onClick={() => navigate("/electronics")}
                className={`nav_links ${
                  location.pathname == "/electronics" ? "active_tab" : ""
                }`}
              >
                <span>Electronics</span>
              </Col>
              <Col
                onClick={() => navigate("/jewelery")}
                className={`nav_links ${
                  location.pathname == "/jewelery" ? "active_tab" : ""
                }`}
              >
                <span>Jewelery</span>
              </Col>
              <Col
                onClick={() => navigate("/mens_clothing")}
                className={`nav_links ${
                  location.pathname == "/mens_clothing" ? "active_tab" : ""
                }`}
              >
                <span>Men's Clothing</span>
              </Col>
              <Col
                onClick={() => navigate("/womens_clothing")}
                className={`nav_links ${
                  location.pathname == "/womens_clothing" ? "active_tab" : ""
                }`}
              >
                <span>Women's Clothing</span>
              </Col>
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
                <Link style={{ textDecoration: "none" }} to="/">
                  Home Page
                </Link>
                <span onClick={() => setmenu(!menu)} style={{ float: "right" }}>
                  <IoMdClose size={30} />
                </span>
              </Nav.Item>
              <Nav.Menu eventKey="2" title="Categories" icon={<MagicIcon />}>
                <Nav.Item
                  eventKey="2-1"
                  icon={<AiOutlineDesktop size={20} />}
                  onClick={() => navigate("/electronics")}
                >
                  {" "}
                  Electronics
                </Nav.Item>
                <Nav.Item
                  eventKey="2-2"
                  icon={<GiHeartNecklace size={20} />}
                  onClick={() => navigate("/jewelery")}
                >
                  {" "}
                  Jewelery
                </Nav.Item>
                <Nav.Item
                  eventKey="2-3"
                  icon={<FaTshirt size={20} />}
                  onClick={() => navigate("/mens_clothing")}
                >
                  {" "}
                  Men's Clothing
                </Nav.Item>
                <Nav.Item
                  eventKey="2-4"
                  icon={<GiShirt size={20} />}
                  onClick={() => navigate("/womens_clothing")}
                >
                  {" "}
                  Women's Clothing
                </Nav.Item>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    </div>
  );
}

export default NavBar;
