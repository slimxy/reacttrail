import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
// import "font-awesome/css/font-awesome.min.css";
import Like from "../components/Like";
import { getMovies } from "../Data/test";
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
  };
  render() {
    if (this.state.Movies.length === 0)
      return <h2>There is no movie in the Database</h2>;

    return (
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
                    onClick={() => this.handleLike(movie)}
                    liked={movie.liked}
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
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => this.ViewMovie(movie)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contact;
