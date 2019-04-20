import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';

function Stockorofile(props) {
    console.log(props.childrens);
    return (
        <div className="table-responsive">
            <hr className="my-4" />
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{props.props.companyName} ({props.props.symbol})</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.props.primaryExchange}. Real Time Price:{props.props.iexRealtimePrice}</h6>
                    <p className="card-text">
                        <h4>{props.props.close} {props.props.change} ({props.props.changePercent}%)  &nbsp; &nbsp; {props.props.extendedPrice} {props.props.extendedChange} ({props.props.extendedChangePercent}%)</h4>
                        At Close: <small><Moment>{props.props.closeTime}</Moment></small>
                        &nbsp; &nbsp; &nbsp;After Hours: <small><Moment>{props.props.extendedPriceTime}</Moment></small> </p>
                </div>
            </div><br/>
            <ul className="nav nav-tabs summary">            
                <li className="nav-item">
                    <a className="nav-link btn-primary" href="#">Summary</a>
                </li>
                </ul>
                <ul className="nav nav-tabs justify-content-end"> 
                <li className="nav-item"><Link to="#"><i className="fa fa-eye fa-2x" aria-hidden="true"></i></Link></li> &nbsp;
                <li className="nav-item"> <Link to="#"> <i className="fa fa-briefcase fa-2x" aria-hidden="true"></i></Link> </li>
            </ul>
            
            <div className="card stockprofilecard">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Previous Close <span className="vals">{props.props.previousClose}</span></li>
                    <li className="list-group-item">Open<span className="vals">  {props.props.open}</span></li>
                    <li className="list-group-item">Bid<span className="vals">  {props.props.iexBidPrice} X {props.props.iexBidSize}</span></li>
                    <li className="list-group-item">Ask <span className="vals"> {props.props.iexAskPrice} X {props.props.iexAskSize}</span></li>
                    <li className="list-group-item">Day's Range <span className="vals"> {props.props.high} - {props.props.low}</span></li>
                    
                </ul>
            </div>
            <div className="card stockprofilecard">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Market Cap<span className="vals">  {props.props.marketCap}</span></li>
                    <li className="list-group-item">PE Ratio (TTM)<span className="vals">  {props.props.peRatio}</span></li>
                    <li className="list-group-item">52 Week Range<span className="vals">  {props.props.week52High} - {props.props.week52Low}</span></li>
                    <li className="list-group-item">Volume <span className="vals"> {props.props.latestVolume}</span></li>
                    <li className="list-group-item">Avg Volume <span className="vals"> {props.props.avgTotalVolume}</span></li>
                   
                </ul>
            </div>

        </div>
    );
}

export default Stockorofile;
