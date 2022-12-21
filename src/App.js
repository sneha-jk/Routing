import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./Main";
import Blog from "./Content";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Main</Link>
            </li>
            <li>
              <Link to="/contact">Content</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Blog />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
