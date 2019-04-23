import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";

class Holdings extends Component {
    
    state = {
        holdings: []
    };

    // When the component mounts, get holdings
    componentDidMount() {
        this.loadHoldings();

    }

    //load holdings
    loadHoldings = () => {
    API.getHoldings()
        .then(res =>
            this.setState({
                holdings: res
            })
        )
        .catch(err => console.log(err));
    };

    render() {
        return (

            <Container>
                <Row>
                    <Col size="md-12">
                        {/* <Searches /> */}
                        <h1>Hello Holdings !!!! </h1>
                    </Col>
                    <Col size="md-12">
                        {/* {this.state.holdings.map(item => {
                            return (
                                <ul>
                                    <li>item</li>
                                </ul>
                        )})}
                         */}
                    </Col>
                </Row>     
            </Container>

        );
    };
};
    
    
export default Holdings;
