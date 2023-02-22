import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import "font-awesome/css/font-awesome.min.css";
// import Footer from "./components/Footer";
import ViewMovie from "./pages/ViewMovie";
import Previous from "./components/Previous";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {/* // <main className="container"> */}
      <BrowserRouter>
        <Header />
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/ViewMovie/:id" element={<ViewMovie />} />
              <Route to="/Contact" component={<Previous />} />
              {/* <Redirect from="/Login" to="/" component={<Login />} /> */}
            </>
          ) : (
            <>
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
            </>
          )}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      {/* </main> */}
    </div>
  );
}

export default App;
