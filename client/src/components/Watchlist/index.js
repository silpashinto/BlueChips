import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";
import "./watchlist.css";

class Watchlist extends Component {

    state = {
        watchlist: [],
        userId: this.props.match.params.userid
    };

    // When the component mounts, get watchlist
    componentDidMount() {
        this.loadWatchlist();
    }

    //load watchlist
    loadWatchlist = () => {
        API.getWatchlist(this.state.userId)
            .then(res => this.setState({ watchlist: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (

            <Container>
                <Row>
                    <Col size="md-12">
                    </Col>
                    <Col size="md-10">

                        <div className="card text-white bg-light mb-3 stkTable">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <div className="card-text"><h3>My Current Stock Watchlist</h3>
                                    <table className="table">
                                        <thead className="holdingsTableHeader">
                                            <tr>
                                                <th scope="col">Symbol</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Shares</th>
                                            </tr>
                                        </thead>

                                        {this.state.watchlist.map(watch => {

                                            return (
                                                <tbody className="holdingsTableBody">
                                                    <tr>
                                                        <td>{watch.stockTicker}</td>
                                                        <td>{watch.price}</td>
                                                        <td>{watch.numberofShares}</td>

                                                    </tr>
                                                </tbody>
                                            )
                                        }
                                        )}
                                    </table>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        )
    };
};

export default Watchlist;
