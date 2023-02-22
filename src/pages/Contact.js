import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ViewMovie from "./ViewMovie";
// import "font-awesome/css/font-awesome.min.css";
import Like from "../components/Like";
import { getMovies } from "../Data/test";
import { Link } from "react-router-dom";
class Contact extends Component {
  state = {
    Movies: getMovies(),
  };
  DeleteMovie = (movie) => {
    const Movies = this.state.Movies.filter((m) => m.id !== movie.id);
    this.setState({ Movies });
  };
  ViewMovie = (movie) => {
    this.state.Movies.map((m) => (
      <img src={movie.mainImage} alt="pics" style={{ width: 70, height: 70 }} />
    ));
  };
  handleLike = (movie) => {
    const movies = [...this.state.Movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    console.log("liked", movie);
  };
  render() {
    if (this.state.Movies.length === 0)
      return <h2>There is no movie in the Database</h2>;

    return (
      // <div className="content">

      <div className="main">
        <p> Showing {this.state.Movies.length} movies in the database.</p>
        <table className="table mt-58px ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Rate</th>
              <th>Genre</th>
              <th> Like</th>
              <th>pic</th>
              <th> Delete</th>
              <th> View</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.name}</td>
                <td>{movie.year}</td>
                <td>{movie.rate}</td>
                <td>{movie.genre}</td>
                <td>
                  {/* <FontAwesomeIcon icon="fa-solid fa-heart" />{" "} */}
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <img
                    src={movie.mainImage}
                    alt="pics"
                    style={{ width: 70, height: 70 }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => this.DeleteMovie(movie)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/ViewMovie/${movie.id}`}>
                    <button className="btn btn-sm btn-primary">View </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      // </div>
    );
  }
}

export default Contact;
