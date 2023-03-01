import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import clock from "../Assets/images/clock.png";
import simongame from "../Assets/images/simongame.png";
import textUtils from "../Assets/images/textUtils.png";
import calculator from "../Assets/images/calculator.png";
import tictactoe from "../Assets/images/tictactoe.png";
import tindog from "../Assets/images/tindog.png";

export default class Projects extends Component {
  render() {
    return (
      <Container className="Container">
        <h1 className="title">Projects</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <img src={textUtils} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Text Utils</h5>
              <p className="card-text">A text utility to analyze your text.</p>
              <a
                href="https://github.com/simrangupta234/textUtils"
                className="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </Col>
          <Col md={4} className="project-card">
            <img src={simongame} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Simon Game</h5>
              <p className="card-text">
                It is a game of short-term memory skill
              </p>
              <a
                href="https://github.com/simrangupta234/SimonGame"
                className="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </Col>
          <Col md={4} className="project-card">
            <img src={calculator} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Calculator</h5>
              <p className="card-text">
                A simple Calculator created using HTML.
              </p>
              <a
                href="https://github.com/simrangupta234/Calculator"
                className="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </Col>
          <Col md={4} className="project-card">
            <img src={clock} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Analog Clock</h5>
              <p className="card-text">
                A analog clock made using html, css and js.
              </p>
              <a
                href="https://github.com/simrangupta234/AnalogClock.github.io"
                className="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </Col>
          <Col md={4} className="project-card">
            <img src={tindog} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tindog</h5>
              <p className="card-text">
                A dummy website for dogs using HTML & CSS.
              </p>
              <a
                href="https://github.com/simrangupta234/Tindog"
                className="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </Col>
          <Col md={4} className="project-card">
            <img src={tictactoe} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tic tac toe</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
