import React from "react";
import "./style.css";
import "../Holdings/holdings.css"
import { Link } from "react-router-dom";

function Holdings(props) {
    console.log(props);
    return (
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

                        {props.props.map(holding => {

                            let totalInvestment = holding.numberofShares * holding.price;
                            return (

                                <tbody className="holdingsTableBody" key={holding.stockTicker}>
                                    <tr>
                                        <th scope="row"><Link to={"/stock/" + holding.stockTicker}><br />{holding.stockTicker.toUpperCase()} </Link></th>
                                        {/* <th scope='row'><Link to="/holdings/{this.state.userId}" onClick={this.loadCompany(holding.stockTicker)}>{holding.stockTicker}</Link></th> */}
                                        {/* <td>{holding.stockTicker.toUpperCase()} </td> */}
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


    );
}

export default Holdings;
