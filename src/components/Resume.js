import React, { Component } from "react";
import Pdf from "../Assets/images/simran_gupta_resume.pdf";

export default class Resume extends Component {
  render() {
    return (
      <div className="Container">
        <h1 className="title">Resume</h1>
        <div>
          <a href={Pdf} target="_blank" rel="noreferrer">
            <button type="button" className="btns">
              Download Pdf
            </button>
          </a>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <iframe
            title="pdf"
            className="Container"
            src={Pdf}
            width="80%"
            height="900"
          ></iframe>
        </div>
        <div>
          <a href={Pdf} target="_blank" rel="noreferrer">
            <button type="button" className="btns">
              Download Pdf
            </button>
          </a>
        </div>
      </div>
    );
  }
}
