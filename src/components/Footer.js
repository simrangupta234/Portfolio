import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

export class Footer extends Component {
  render() {
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="5" className="footer-copywright">
            <p>Designed and Developed by Simran Gupta</p>
          </Col>
          <Col md="4" className="footer-copywright">
            <p>Copyright © 2022 Simran Gupta</p>
          </Col>
          <Col md="3" className="footer-body">
            <SocialIcon
              className="social"
              url="https://github.com/simrangupta234"
            ></SocialIcon>
            <SocialIcon
              className="social"
              url="https://twitter.com/simrangupta234"
            ></SocialIcon>
            <SocialIcon
              className="social"
              url="https://www.linkedin.com/in/simrangupta234"
            ></SocialIcon>
            <SocialIcon
              className="social"
              url="https://www.instagram.com/simrangupta_234"
            ></SocialIcon>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
