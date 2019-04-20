import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Stocksprofile from "../components/Stocks/Stockprofile";
import Searches from "../components/Search/SearchResultContainer";
import Insidenav from "../components/Nav/insidenav"

class Stock extends Component {

    state = {
        stockdetails: [],
        symbol: this.props.match.params.symbol
    };
    // When the component mounts, get stock detail
    componentDidMount() {
        this.loadStockProfile();
    }
    //loading stock profile
    loadStockProfile = () => {
        API.search(this.state.symbol)
            .then(res =>
                this.setState({
                    stockdetails: res.data
                })
            )
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
                    <Col size="md-12">
                        <Stocksprofile props={this.state.stockdetails} />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <footer>

                            {/* <h3> Footer stuff here ffffffffffffffffffffffffffffffff !</h3> */}

                        </footer>
                    </Col>
                </Row>

            </Container>

        );
    }

}
export default Stock;
