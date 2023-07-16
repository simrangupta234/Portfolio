import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import clock from "../Assets/images/clock.png";
import container from "../Assets/images/container.avif";

export default class Blogs extends Component {
  render() {
    return (
      <Container fluid className="Container">
        <h1 className="title">Blogs</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "120px" }}>
          <Col md={4} className="project-card">
            <img src={clock} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Analog clock using JS</h5>
              <p className="card-text">
                It is basically blog how to make a analog clock using html, css
                and js.
              </p>
              <a
                href="https://simrangupta.hashnode.dev/analog-clock-using-js"
                className="btns"
              >
                Learn More
              </a>
            </div>
          </Col>
          <Col md={4} className="project-card">
            <img src={container} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Containers</h5>
              <p className="card-text">
                A blog to explain containerization technology.
              </p>
              <a
                href="https://simrangupta.hashnode.dev/containerization"
                className="btns"
              >
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
