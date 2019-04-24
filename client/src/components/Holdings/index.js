import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";
import "./holdings.css";

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
            .then( res => this.setState({holdings: res.data}))
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
                            <div className="card-text"><h3>My Current Stock Holdings</h3>
                            <table className="table">
                                <thead className="holdingsTableHeader">
                                <tr>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Shares</th>
                                    <th scope="col">Total Investment</th>
                                </tr>
                                </thead>

                                {this.state.holdings.map(holding => {

                                    let totalInvestment = holding.numberofShares * holding.price;

                                    return (
                                        <tbody className = "holdingsTableBody">
                                        <tr>
                                        {/* <th scope="row"><Link to={"/stock/" + item.symbol}>{item.symbol}<br /><small>{item.companyName}</small></Link></th> */}
                                        <td>{holding.stockTicker}</td>
                                        <td>{holding.price}</td>
                                        <td>{holding.numberofShares}</td>
                                        <td>{totalInvestment}</td>

                
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
   
export default Holdings;
