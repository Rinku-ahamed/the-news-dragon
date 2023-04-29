import React from "react";
import { Button } from "react-bootstrap";
import Bg from "../../../assets/bg.png";
import { FaGithub, FaGoogle } from "react-icons/fa";
import QZone from "../QZone/QZone";
import Social from "../Social/Social";
const RightNav = () => {
  return (
    <>
      <div>
        <h4 className="mb-4 fw-bold">Login With</h4>
        <Button variant="outline-primary" className="w-100">
          <span className="me-2">
            <FaGoogle />
          </span>
          Login With Google
        </Button>
        <Button variant="outline-secondary mt-2" className="w-100">
          <span className="me-2">
            <FaGithub />
          </span>
          Login With Github
        </Button>
      </div>
      <Social></Social>
      <QZone></QZone>
      <div className="mt-5 position-relative">
        <img src={Bg} alt="" className="w-100 h-75" />
        <div className="position-absolute top-0 start-0 text-center px-4 mt-5">
          <h3 className="text-white">Create an Amazing Newspaper</h3>
          <p className="text-white mt-3">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </>
  );
};

export default RightNav;
