import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getMovies } from "../Data/test";
// function Home() {
//   return (
//     <div className="main">
//           <p>Home page</p>

//           <table className="table">
//               <thead>
//                   <th>Name</th>
//                   <th>Year</th>
//                   <th>Rate</th>
//                   <th>pic</th>
//                   <th>Delete</th>

//               </thead>

//               {}
//           </table>

//     </div>
//   );
// }
class Home extends Component {
  state = {
    Movies: getMovies(),
  };
  render() {
    return (
      <div className="main">
        <table className="table mt-58px ">
          <thead>

            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Rate</th>
              <th>Genre</th>
              <th>pic</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Movies.map((movie) => (
              <tr>
                <td>{movie.name}</td>
                <td>{movie.year}</td>
                <td>{movie.rate}</td>
                <td>{movie.genre}</td>
                <td>
                  <img
                    src={movie.mainImage}
                    alt="pics"
                    style={{ width: 50, height: 50 }}
                  />
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
