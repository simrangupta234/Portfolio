import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import main from "../Assets/home-main.svg";
export class Home extends Component {
  render() {
    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> SIMRAN GUPTA</strong>
                </h1>

                <div>
                  <Typewriter
                    options={{
                      strings: [
                        "Developer",
                        "Devops Enthusist",
                        "Open Source Contributor",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                    }}
                  />
                </div>
              </Col>

              <Col md={5}>
                <img
                  src={main}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    );
  }
}

export default Home;
