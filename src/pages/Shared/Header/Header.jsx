import React, { useContext } from "react";
import Logo from ".././../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="my-4">
      <div className="text-center mb-5">
        <img src={Logo} alt="" />
        <p className="mb-1 mt-3 fs-5 text-secondary">
          Journalism Without Fear or Favour
        </p>
        <p className="mb-1 fs-5 fw-semibold text-secondary">
          {moment().format("dddd , MMM Do , YYYY")}
        </p>
      </div>
      <div className="mb-4 p-2 d-flex align-items-center">
        <Button variant="danger" className="me-1 fw-bold fs-6 px-4">
          Latest
        </Button>
        <Marquee pauseOnHover={true}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as... Match Highlights: Germany vs Spain
          — as it happened ! Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      {/* Navbar area start */}
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="text-decoration-none text-secondary me-3">
                Home
              </Link>
              <Link to="/" className="text-decoration-none text-secondary me-3">
                About
              </Link>
              <Link to="/news" className="text-decoration-none text-secondary ">
                News
              </Link>
            </Nav>
            <div className="d-flex">
              {user && (
                <img
                  src={user?.photoURL}
                  alt=""
                  className="rounded-circle me-2"
                  style={{ width: "40px", height: "40px" }}
                />
              )}
              {user ? (
                <Button variant="dark" className="px-4" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="dark" className="px-4">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
