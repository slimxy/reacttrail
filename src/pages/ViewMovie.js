import React, { Component } from "react";
import Contact from "./Contact";
import { getMovies } from "../Data/test";
import { Link, useParams } from "react-router-dom";
import { myMovies } from "../Data/test";
import Previous from "../components/Previous";

const ViewMovie = () => {
  let { id } = useParams();
  console.log(id);
  const movie = myMovies.find((item) => item.id === id);
  console.log(movie.name);

  return (
    <React.Fragment>
      <div className="main">
        <Link to="../Contact">
          <Previous />
        </Link>
        <ul key={movie.id} className="list-group" style={{width:"45%",height:"40%",margin:"0 0 80% 30%"}}>
          <li className="list-group-item">
            <h4>Movie Name:</h4> {movie.name}
          </li>
          <li className="list-group-item">
            <h4>Movie Rate:</h4> {movie.rate}
          </li>
          <li className="list-group-item">
            <h4>Movie Year:</h4> {movie.year}
          </li>
          <li className="list-group-item">
            <h4>Movie Genre:</h4> {movie.genre}
          </li>
          <li className="list-group-item">
            {" "}
            <h4>Movie Episode:</h4>
          </li>
          <div className="imgs">
            <li className="list-group-item">
              <img
                style={{ width: "120px", height: "120px" }}
                src={movie.images[0]}
                alt="moviei"
              />
            </li>
            <li className="list-group-item">
              <img
                style={{ width: "120px", height: "120px" }}
                src={movie.images[1]}
                alt="moviei"
              />
            </li>
            <li className="list-group-item">
              <img
                style={{ width: "120px", height: "120px" }}
                src={movie.images[2]}
                alt="moviei"
              />
            </li>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ViewMovie;
