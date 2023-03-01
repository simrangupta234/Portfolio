import "./App.css";
import "./style.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Blogs from "./components/Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/blogs" element={<Blogs />} />
              <Route exact path="/resume" element={<Resume />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
