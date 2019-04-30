import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Footer from "../components/Footer";
import HLDs from "../components/Stocks/Holding";
import Userprofile from "../components/Userprofile"

class Holdings extends Component {

    
   state = {
        holdings: [],
        ticker: "",
        userId: Userprofile.getuserId()
    };

    // When the component mounts, get holdings
    componentDidMount() {
        
        this.loadHoldings();

    }
     //load holdings
     loadHoldings = () => {

        API.getHoldings(this.state.userId)
            .then(res => 
                this.setState({ holdings: res.data }))
            .catch(err => console.log(err));
    };
    render() {
        return (

            <Container>
                <Row>
                    <Col size="md-8">
                        {/* <Searches /> */}
                    </Col>
                    <Col size="md-4">
                        {/* <Insidenav /> */}
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <HLDs props={this.state.holdings} />
                    </Col>
                    <Col size="md-6">
                    </Col>
                </Row>

            <Footer />
            
            </Container>

        );
    }   

}
 export default Holdings;