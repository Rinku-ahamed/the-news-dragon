import React, { useContext } from "react";
import User from "../../../assets/user.jpg";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const NavigationBar = () => {
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
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                to="/category/0"
                className="text-decoration-none text-secondary me-3"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="text-decoration-none text-secondary me-3"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-decoration-none text-secondary "
              >
                Register
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

export default NavigationBar;
