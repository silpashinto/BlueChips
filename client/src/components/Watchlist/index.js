import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";
import "./watchlist.css";

class Watchlist extends Component {
    
    state = {
        watchlist: []
    };

    // When the component mounts, get holdings
    componentDidMount() {
        this.loadWatchlist();
    }

    //load holdings
    loadWatchlist = () => {
        API.getWatchlist()
            .then( res => this.setState({watchlist: res.data}))
            .catch(err => console.log(err));
    };

    render() {
        return (

            <Container>
                <Row>
                    <Col size="md-12">
                        {/* <Searches /> */}
                        {/* <h1>My Current Holdings</h1> */}
                        </Col>
                    <Col size="md-10">
                       
                        <div className="card text-white bg-light mb-3 stkTable">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <div className="card-text"><h3>My Current Stock Watchlist</h3>
                            <table className="table">
                                <thead className="watchlistTableHeader">
                                <tr>
                                    <th scope="col">Symbol</th>
                                </tr>
                                </thead>

                                {this.state.watchlist.map(watch => {

                                    return (
                                        <tbody className = "watchlistTableBody">
                                        <tr>
                                        {/* <th scope="row"><Link to={"/stock/" + item.symbol}>{item.symbol}<br /><small>{item.companyName}</small></Link></th> */}
                                        <td>{watch.stockTicker}</td>
                
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
        )};
};
   
export default Watchlist;
