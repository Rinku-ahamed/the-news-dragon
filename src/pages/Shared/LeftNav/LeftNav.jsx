import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h4 className="mb-4 fw-bold ">All Category {categories.length}</h4>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id}>
            <NavLink
              to={`/category/${category.id}`}
              className={`text-decoration-none text-secondary fw-semibold d-block ${(
                isActive
              ) => (isActive ? "bg-secondary" : "")}`}
            >
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
