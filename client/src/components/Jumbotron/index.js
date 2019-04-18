import React from "react";
import { Col, Row, Container } from "../Grid";

function Jumbotron({ children }) {
  return (
    <Row>
      <Col size="md-12">
        <div
        style={{ }}
        className="jumbotron"
        >
        {children}
        </div>
      
      </Col>
    </Row>
    
  );
}

export default Jumbotron;
