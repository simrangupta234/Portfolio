import React, { Component } from "react";
import Techstack from "../About/Techstack";
import "./About.css";
export default class About extends Component {
  render() {
    return (
      <div className="Container">
        <h1 className="title">
          About<a style={{ color: "#702963" }}> me</a>
        </h1>
        <div className="about-content">
          <p>
            Hi Everyone, I am Simran Gupta. I am a recent B.tech graduate from{" "}
            <a style={{ color: "#702963" }}>
              {" "}
              GL Bajaj Group Of Institutions Mathura.
            </a>
          </p>
          <p>
            {" "}
            I’m a <a style={{ color: "#702963" }}> fast learner </a> and focused
            towards my goal.
          </p>
          <p>
            I contribute to <a style={{ color: "#702963" }}> Open Source</a> and
            also learning <a style={{ color: "#702963" }}>web development.</a>
          </p>
          <p>
            I’m a strong believer in the power of tech communities. These are
            the best place to connect, collaborate, learn and grow in public
            under the guidance of experts.
          </p>
        </div>
        <h2 className="title">
          Technical <a style={{ color: "#702963" }}>Skills</a>
        </h2>
        <Techstack />
      </div>
    );
  }
}
