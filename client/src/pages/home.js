import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import image1 from "../images/bluechips.png"
import { Col, Row, Container } from "../components/Grid";
import Searches from "../components/Search/SearchResultContainer";
import News from "../components/News/NewsResultContainer";
import Stocks from "../components/Stocks";
class Home extends Component {

 

  render() {
    return (
      <Container>
        <Row>
        <Col size="md-8">
          <Searches /> 
              <Stocks />
          </Col>
          <Col size="md-4">
              <News />                       
          </Col>         
        </Row>
        <Row>
          <Col size="md-12">          
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <footer>

              <h3> Footer stuff here ffffffffffffffffffffffffffffffff !</h3>

            </footer>


          </Col>
        </Row>

      </Container>
    );
  }
}

export default Home;
