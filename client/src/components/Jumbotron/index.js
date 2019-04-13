import React from "react";
import { Col, Row, Container } from "../Grid";

function Jumbotron({ children }) {
  return (
    <Row>
      <Col size="md-12">
        <div
        style={{ height: 250, clear: "both", paddingTop: 50, textAlign: "center" }}
        className="jumbotron"
        >
        {children}
        </div>
      
      </Col>
    </Row>
    
  );
}

export default Jumbotron;
