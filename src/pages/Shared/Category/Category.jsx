import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../NewsCard/NewsCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h4 className="mb-4 fw-bold">Dragon News Home</h4>
      {categoryNews.map((cn) => (
        <NewsCard key={cn._id} news={cn}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
