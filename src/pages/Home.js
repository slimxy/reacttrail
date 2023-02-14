import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getMovies } from "../Data/test";
class Home extends Component {
  state = {
    Movies: getMovies(),
  };

  render() {
    return (
      <div className="main  ">
        <div className="movieContent m-4  ">
          {this.state.Movies.map((movie) => (
            <ul
              className="list-group m-2"
              key={movie.id}
              style={{
                listStyle: "none",
                width: "75%",
                height: "720px",
              }}
            >
              <li className="list-group-item">{movie.name}</li>
              <li className="list-group-item">
                <img
                  src={movie.mainImage}
                  alt="main image"
                  style={{ width: "280px", height: "350px" }}
                />
              </li>
              <li className="list-group-item">{movie.info}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
