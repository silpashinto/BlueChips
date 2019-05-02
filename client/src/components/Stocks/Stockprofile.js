import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import 'moment-timezone';
import UserProfile from "../Userprofile";
import API from "../../utils/API"
import NumberFormat from 'react-number-format';


function watchMe(symbol) {

  var watchListItem = {};
  var mainstock = {};
  let userid = UserProfile.getuserId();

  if (userid === '') {

    alert("Please do Login");

  } else {

    //get stockinfo 
    API.search(symbol)
      .then(res => {
        console.log(res.data);
        watchListItem = {
          userId: userid,
          stockstatusId: 1,
          numberofShares: 0,
          price: res.data.close,
          stockTicker: res.data.symbol
        };

        mainstock = {
          stockTicker: res.data.symbol,
          stockName: res.data.companyName,
          Exchange: res.data.primaryExchange
        };
        //insert into stock
        API.insertIntostock(mainstock)
          .then(resdata =>

            //insert into mystock
            API.insertIntoMystock(watchListItem)
              .then(response => console.log(response.data))
              .catch(err => console.log(err))
          )
          .catch(err => console.log(err))
        alert("Stock Added to WatchList");


      })
      .catch(err => console.log(err));
  }

}

function holdMe(symbol) {

  var holdtItem = {};
  var mainstock = {};
  let userid = UserProfile.getuserId();

  if (userid === '') {

    alert("Please do Login");

  } else {

    //get stockinfo 
    API.search(symbol)
      .then(res => {
        console.log(res.data);
        holdtItem = {
          userId: userid,
          stockstatusId: 2,
          numberofShares: 0,
          price: res.data.close,
          stockTicker: res.data.symbol
        };

        mainstock = {
          stockTicker: res.data.symbol,
          stockName: res.data.companyName,
          Exchange: res.data.primaryExchange
        };
        //insert into stock
        API.insertIntostock(mainstock)
          .then(resdata =>

            //insert into mystock
            API.insertIntoMystock(holdtItem)
              .then(response => console.log(response.data))
              .catch(err => console.log(err))
          )
          .catch(err => console.log(err))
        alert("Stock Added to Holdings");


      })
      .catch(err => console.log(err));
  }

}

function Stocksprofile(props) {
  console.log(props);
  let cls = "";
  let cls1 = "";
  let cls2 = "";
  let cls3 = "";
  let cls4 = "";
  let cls5 = "";
  let cls6 = "";
  if (props.props.changePercent > 0) { cls = "green"; } else { cls = "red"; }
  if (props.props.change > 0) { cls1 = "green"; } else { cls1 = "red"; }
  if (props.props.iexRealtimePrice > 0) { cls2 = "green"; } else { cls2 = "red"; }
  if (props.props.close > 0) { cls3 = "green"; } else { cls3 = "red"; }
  if (props.props.extendedPrice > 0) { cls4 = "green"; } else { cls4 = "red"; }
  if (props.props.extendedChange > 0) { cls5 = "green"; } else { cls5 = "red"; }
  if (props.props.extendedChangePercent > 0) { cls6 = "green"; } else { cls6 = "red"; }

  return (
    <div className="table-responsive">
      <hr className="my-4" />
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{props.props.companyName} ({props.props.symbol})</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.props.primaryExchange}. Real Time Price:<span className={cls2}>{props.props.iexRealtimePrice}</span></h6>
          <p className="card-text">
            <h4><span className={cls3}>{props.props.close}</span> <span className={cls1}>{props.props.change}</span> (<span className={cls}>{props.props.changePercent * 100}%</span>)
                          &nbsp; &nbsp; </h4>
            At Close: <small><Moment>{props.props.closeTime}</Moment></small>
            <h4><span className={cls4}>{props.props.extendedPrice}</span> <span className={cls5}>
              {props.props.extendedChange}</span> (<span className={cls6}>{props.props.extendedChangePercent * 100}%</span>)</h4>
            After Hours: <small><Moment>{props.props.extendedPriceTime}</Moment></small> </p>
        </div>
      </div><br />
      <ul className="nav nav-tabs summary">
        <li className="nav-item">
          <Link className="nav-link btn-primary" to="#">Summary</Link>
        </li>
      </ul>
      <ul className="nav nav-tabs justify-content-end">
        <li className="nav-item"><Link to="#"><i onClick={() => watchMe(props.props.symbol)} className="fa fa-eye fa-2x" aria-hidden="true"></i></Link></li> &nbsp;
                <li className="nav-item"> <Link to="#"> <i onClick={() => holdMe(props.props.symbol)} className="fa fa-briefcase fa-2x" aria-hidden="true"></i></Link> </li>
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
          <li className="list-group-item">Market Cap<span className="vals">
            <NumberFormat value={props.props.marketCap} displayType={'text'} thousandSeparator={true} />

          </span></li>
          <li className="list-group-item">PE Ratio (TTM)<span className="vals">  {props.props.peRatio}</span></li>
          <li className="list-group-item">52 Week Range<span className="vals">  {props.props.week52High} - {props.props.week52Low}</span></li>
          <li className="list-group-item">Volume <span className="vals">
            <NumberFormat value={props.props.latestVolume} displayType={'text'} thousandSeparator={true} />
          </span></li>
          <li className="list-group-item">Avg Volume <span className="vals">
            <NumberFormat value={props.props.avgTotalVolume} displayType={'text'} thousandSeparator={true} />
          </span></li>

        </ul>
      </div>

    </div>
  );
}

export default Stocksprofile;
