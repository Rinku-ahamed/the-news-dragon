import moment from "moment/moment";
import React from "react";
import { Card } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const {
    author,
    title,
    thumbnail_url,
    details,
    total_view,
    rating,
    image_url,
    _id,
  } = news;
  return (
    <Card className=" mt-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src={author?.img}
            alt=""
            className="rounded-circle me-3"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <h5 className="mb-1 fs-5 fw-semibold">{author?.name}</h5>
            <span>{moment(author?.published_date).format("YYYY-MM-D")}</span>
          </div>
        </div>
        <div>
          <span className="me-3">
            <FaRegBookmark />
          </span>
          <span>
            <FaShareAlt />
          </span>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="fs-4 mb-2">{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <p className="mt-3">
          {details.length < 250 ? details : details.slice(0, 250)}...{" "}
          <Link to={`/news/${_id}`}>Read More</Link>
        </p>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">
            <Rating
              placeholderRating={rating?.number}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-danger"></FaStar>}
              fullSymbol={<FaStar className="text-danger"></FaStar>}
              readonly
            ></Rating>
            <span className="ms-2">{rating?.number}</span>
          </p>
          <p className="mb-0">
            <FaEye /> {total_view}
          </p>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
