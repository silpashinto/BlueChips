import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Watchlist from "../components/Watchlist";


function showWatchlist(){


    return (

        <Container>

            <Row>
                <Col size="md-12">
                    <Watchlist />                        
                </Col>
            </Row>
            
        </Container>

    );
};



export default Watchlist;