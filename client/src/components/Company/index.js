import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import "./company.css";
import API from "../../utils/API";

class Company extends Component {

    state = {
        company: [],
        ticker: "ge"
    }

    componentDidMount(tick){
        console.log("props line 14" , tick);
        this.loadCompany(tick);
    }

    //load company
    loadCompany = (tick) => {
        this.setState({ticker: tick})
        API.getCompany(this.state.ticker)
            .then(res => this.setState({ company: res.data }))
            .catch(err => console.log(err));     
    }   
    
            
    render () {

        return (
            <Container>
            <Col size="md-12">
            <div className="card text-white bg-light mb-3 stkTable">
                <div className="card-header"></div>
                <div className="card-body">
                    <div className="card-text"><h3>Company Details</h3>
                        <table className="table">
                            <thead className="companyTableHeader">
                                <tr>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Exchange</th>
                                    <th scope="col">Industry</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">CEO</th>
                                    <th scope="col">Sector</th>
                                    
                                </tr>
                            </thead>

                         

                               
                                    
                                    <tbody className="companyTableBody" key={this.state.company.companyName}>
                                        <tr>
                                            
                                            <td>{this.state.company.companyName}</td>
                                            <td>{this.state.company.exchange}</td>
                                            <td>{this.state.company.industry}</td>
                                            <td>{this.state.company.website}</td>
                                            <td>{this.state.company.description}</td>
                                            <td>{this.state.company.CEO}</td>
                                            <td>{this.state.company.sector}</td>
                                            
                                        </tr>
                                    </tbody>
                                    
                                )
                            
                            
                        </table>
                    </div>
                </div>
            </div>
            </Col>
        
        </Container>

    
        )
}
}

export default Company;