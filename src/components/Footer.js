import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

export class Footer extends Component {
  render() {
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="6" className="footer-container1">
            <div className="footer-heading">
              <h1>Connect <a  style={{ color: "#702963"}}>with me</a></h1>
            </div>
            <div className="socialicons">
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
            </div>
            <div className="footer-copywrite">
              <p>Designed and Developed by <a  style={{ color: "#702963"}}> Simran Gupta </a></p>
              <p>Copyright © 2022 <a  style={{ color: "#702963"}}>Simran Gupta</a></p>
            </div>
          </Col>
          <Col md="6" className="footer-container2">
            <h1 >Send <a  style={{ color: "#702963"}}>A message</a></h1>
            <textarea
              name=""
              id=""
              cols="60"
              rows="1"
              placeholder="From:"
            ></textarea>
            <textarea
              name=""
              id=""
              cols="60"
              rows="1"
              placeholder="Subject:"
            ></textarea>
            <textarea
              name=""
              id=""
              cols="60"
              rows="6"
              placeholder="Write message..."
            ></textarea>

            <button className="btns">Send A message</button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
