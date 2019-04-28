import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Stocksprofile from "../components/Stocks/Stockprofile";
// import Searches from "../components/Search/SearchResultContainer";
// import Insidenav from "../components/Nav/insidenav"
import Chart from "../components/Stocks/Chart";
import Footer from "../components/Footer";


class Stock extends Component {

    state = {
        stockdetails: [],
        stockchart:[],
        symbol: this.props.match.params.symbol
    };
    // When the component mounts, get stock detail
    componentDidMount() {
        this.loadStockProfile();
        this.loadStockChart();
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

    //loading stock chart
    loadStockChart = () => {
        API.getChart6m(this.state.symbol)
            .then(res =>
                this.setState({
                    stockchart: res.data
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
                    <Col size="md-6">
                        <Stocksprofile props={this.state.stockdetails} />
                    </Col>
                    <Col size="md-6">
                        <Chart props={this.state.stockchart} />
                    </Col>
                </Row>

            <Footer />
            
            </Container>

        );
    }

}
export default Stock;
