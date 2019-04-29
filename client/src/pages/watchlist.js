import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Watchlist from "../components/Watchlist";
import Footer from "../components/Footer";
import Insidenav from "../components/Nav";


function showWatchlist(){

 
        return (

        <Container>
            <Insidenav />
            <Row>
                <Col size="md-12">
                    <Watchlist />                        
                </Col>
            </Row>
            
            <Footer />
        </Container>

        );
    

};


export default Watchlist;