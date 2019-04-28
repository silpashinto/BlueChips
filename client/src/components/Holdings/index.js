import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";
import "./holdings.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Company from "../Company";


class Holdings extends Component {

    state = {
        holdings: [],
        company: [],
        userId: this.props.match.params.userid
    };

    // When the component mounts, get holdings
    componentDidMount() {
        this.loadHoldings();

    }

    //load holdings
    loadHoldings = () => {

        API.getHoldings(this.state.userId)
            .then(res => this.setState({ holdings: res.data }))
            .catch(err => console.log(err));
    };

    
    render() {

        return (

            <Container>
                <div className = 'container1'>
                <Row>
                    <Col size="md-12">
                    </Col>
                    <Col size="md-10">

                        {/* Holdings Table */}
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
                                               
                                                <tbody className="holdingsTableBody" key={holding.stockTicker}>
                                                    <tr>
                                                        {/* <th scope="row"><Link to={"/holdings/" + {user}} onClick={this.loadCompany(holding.stockTicker)}><br />{holding.stockTicker}</Link></th> */}
                                                        {/* <th scope='row'><Link to="/holdings/{this.state.userId}" onClick={this.loadCompany(holding.stockTicker)}>{holding.stockTicker}</Link></th> */}
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

                        <Company symbols={this.state.holdings}></Company>

                    </Col>
                   
                </Row>
                </div>
            <Footer />
         
            </Container>
        )
    };
};

export default Holdings;
