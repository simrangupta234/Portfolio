import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import clock from "../Assets/images/clock.png";
import simongame from "../Assets/images/simongame.png";
import drumkit from "../Assets/images/drumkit.jpg";
import textUtils from "../Assets/images/textUtils.png";
import calculator from "../Assets/images/calculator.png";
import tictactoe from "../Assets/images/tictactoe.png";
import tindog from "../Assets/images/tindog.png";

export default class Projects extends Component {
  render() {
    return (
      <Container fluid className="Container">
        <h1 className="title">Projects</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="project-card">
            <img src={textUtils} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Text Utils</h5>
              <p className="card-text">A text utility to analyze your text.</p>
              <a
                href="https://github.com/simrangupta234/textUtils"
                className="btns"
              >
                Github
              </a>
              <a
                href="https://textutilitywebsite.netlify.app/"
                className="btns"
              >
                Demo
              </a>
            </div>
          </Col>
          <Col md={3} className="project-card">
            <img src={drumkit} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Drum Kit</h5>
              <p className="card-text">
                It is a music web site which play sounds of musical instruments.
              </p>
              <a
                href="https://github.com/simrangupta234/DrumKit"
                className="btns"
              >
                Github
              </a>
              <a href="https://drumkitweb2.netlify.app/" className="btns">
                Demo
              </a>
            </div>
          </Col>
          <Col md={3} className="project-card">
            <img src={simongame} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Simon Game</h5>
              <p className="card-text">
                It is a game of short-term memory skill
              </p>
              <a
                href="https://github.com/simrangupta234/SimonGame"
                className="btns"
              >
                Github
              </a>
              <a
                href="https://simrangupta234.github.io/SimonGame/"
                className="btns"
              >
                Demo
              </a>
            </div>
          </Col>
          <Col md={3} className="project-card">
            <img src={calculator} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Calculator</h5>
              <p className="card-text">
                A simple Calculator created using HTML.
              </p>
              <a
                href="https://github.com/simrangupta234/Calculator"
                className="btns"
              >
                Github
              </a>
              <a
                href="https://simrangupta234.github.io/Calculator/"
                className="btns"
              >
                Demo
              </a>
            </div>
          </Col>
          <Col md={3} className="project-card">
            <img src={clock} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Analog Clock</h5>
              <p className="card-text">
                A analog clock made using html, css and js.
              </p>
              <a
                href="https://github.com/simrangupta234/AnalogClock.github.io"
                className="btns"
              >
                Github
              </a>
              <a
                href="https://simrangupta234.github.io/AnalogClock.github.io/"
                className="btns"
              >
                Demo
              </a>
            </div>
          </Col>
          <Col md={3} className="project-card">
            <img src={tindog} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tindog</h5>
              <p className="card-text">
                A dummy website for dogs using HTML & CSS.
              </p>
              <a
                href="https://github.com/simrangupta234/Tindog"
                className="btns"
              >
                Github
              </a>
              <a
                href="https://simrangupta234.github.io/Tindog.github.io/"
                className="btns"
              >
                Demo
              </a>
            </div>
          </Col>
          <Col md={3} className="project-card">
            <img src={tictactoe} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tic tac toe</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btns">
                Github
              </a>
              <a href="/" className="btns">
                Demo
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
