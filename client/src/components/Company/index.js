import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import "./company.css";
import API from "../../utils/API";

class Company extends Component {

    state = {
        company: [],
        symbol: ''
    }


    componentDidMount(){
        this.loadCompany();
    }


    //load company
    loadCompany = (props) => {
        console.log(props);
        API.getCompany(props.symbols)
            .then(res => this.setState({ company: res.data }))
            .catch(err => console.log(err));
    };

 
    render() {

    
        return (


        <div>
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

                            {this.state.company.map(comp => {

                                return (
                                    
                                    <tbody className="companyTableBody" key={comp.companyName}>
                                        <tr>
                                            
                                            <td>{comp.companyName}</td>
                                            <td>{comp.exchange}</td>
                                            <td>{comp.industry}</td>
                                            <td>{comp.website}</td>
                                            <td>{comp.description}</td>
                                            <td>{comp.CEO}</td>
                                            <td>{comp.sector}</td>
                                            
                                        </tr>
                                    </tbody>
                                    
                                )
                            }
                            )}
                        </table>
                    </div>
                </div>
        </div>
    </div>

    )
    
    }

}


export default Company;