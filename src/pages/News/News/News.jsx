import React from "react";
import { Button } from "react-bootstrap";
import { Link, useLoaderData, useParams } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  const singleNews = useLoaderData();
  const { title, details, image_url, category_id } = singleNews;
  console.log(singleNews);
  console.log(id);
  return (
    <div>
      <img src={image_url} alt="" className="w-100" />
      <h2 className="mt-4">{title} </h2>
      <p className="mt-3">{details}</p>
      <Link to={`/category/${category_id}`}>
        <Button variant="danger">All news in this category</Button>
      </Link>
    </div>
  );
};

export default News;
