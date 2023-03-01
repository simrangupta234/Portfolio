import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <div className="Container">
        <h2 className="title">About me</h2>
        <p>
          Hi Everyone, I am Simran Gupta. I am a 3rd year student pursuing
          B.tech from GL Bajaj Group Of Institutions Mathura.
        </p>
        <h2 className="title">Technical Skills</h2>
        <ul>
          <li>C</li>
          <li>Java</li>
          <li>GO</li>
          <li>DSA</li>
        </ul>
      </div>
    );
  }
}
