import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Social = () => {
  return (
    <div className="mt-5">
      <h4 className="mb-3 fw-bold">Find Us On</h4>
      <div className="d-flex align-items-center border rounded-1 p-2 mt-4">
        <span className="me-3 fs-5 text-primary">
          <FaFacebook />
        </span>
        <span className="text-secondary fs-5"> Facebook</span>
      </div>
      <div className="d-flex align-items-center border rounded-1 p-2 mt-4">
        <span className="me-3 fs-5 text-primary">
          <FaTwitter />
        </span>
        <span className="text-secondary fs-5"> Twitter</span>
      </div>
      <div className="d-flex align-items-center border rounded-1 p-2 mt-4">
        <span className="me-3 fs-5 text-danger">
          <FaInstagram />
        </span>
        <span className="text-secondary fs-5"> Instagram</span>
      </div>
    </div>
  );
};

export default Social;
