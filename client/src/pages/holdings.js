import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Holdings from "../components/Holdings";
import Footer from "../components/Footer";



function showHoldings(){

    
        return (

            <Container>

                <Row>
                    <Col size="md-12">
                        {/* <Searches /> */}
  
                    </Col>
                    <Col size="md-12">
                      <Holdings />                      
                    </Col>
                </Row>
            <Footer />
            </Container>

        );
    };

 
    
export default Holdings;