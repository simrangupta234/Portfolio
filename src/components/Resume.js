import React, { Component } from "react";
import Pdf from "../Assets/SimranGuptaResume.pdf";

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
            frameBorder="0"
            width="802"
            height="1100"
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
