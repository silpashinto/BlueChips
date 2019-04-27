import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Holdings from "../components/Holdings";


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
               
            </Container>

        );
    };

    
    
export default Holdings;