import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner-area" style={{ height: "700px" }}>
      <div className=" text-white banner-text-area">
        <h1 className="fw-bold">ADVENTURE IS WORTHWHILE</h1>
        <p>
          TouristGang is the country’s first and leading online travel
          aggregator .We had a dream to make travel easier for people. .Discover
          New Places With Us.
        </p>
        <Link to="/destinations">
          <button className="btn btn-danger">Our Destinations</button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
