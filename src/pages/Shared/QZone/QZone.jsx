import React from "react";
import Swimming from "../../../assets/qZone1.png";
import ClassImg from "../../../assets/qZone2.png";
import Playing from "../../../assets/qZone3.png";
const QZone = () => {
  return (
    <div className="mt-5">
      <h4 className="mb-3 fw-bold">Q-Zone</h4>
      <div>
        <img src={Swimming} alt="" className="w-100" />
      </div>
      <div>
        <img src={ClassImg} alt="" className="w-100" />
      </div>
      <div>
        <img src={Playing} alt="" className="w-100" />
      </div>
    </div>
  );
};

export default QZone;
