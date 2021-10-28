import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img
        className="w-100"
        src="https://i.ibb.co/XZ6M9Tv/404-Error-Page-not-Found-with-people-connecting-a-plug-rafiki-1.png"
        alt=""
      />
      <div className="text-center my-5">
        <Link to="/home">
          <button className="btn btn-danger">Go To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
