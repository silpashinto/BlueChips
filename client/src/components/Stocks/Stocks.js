import React from "react";
import "./style.css";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import UserProfile from "../Userprofile";
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
function Stocks(props, type, classtype) {
  //console.log(props[0]);
  return (

    <div className="card text-white bg-light mb-3 stkTable">
      <div className="card-header">{type} <a href={"#" + classtype} data-toggle="collapse" class="dropdown" aria-controls={classtype} aria-expanded="false"><i class="fa fa-chevron-circle-down fa-2x" aria-hidden="true"></i></a>
      </div>
      <div className="card-body collapse" id={classtype}>
        <p className="card-text">
          <table className="table">
            <thead>

              <tr>
                <th scope="col">Symbol</th>
                <th scope="col">Price</th>
                <th scope="col">Change</th>
                <th scope="col">%Change</th>
                <th scope="col">Vol</th>
                <th scope="col">Avg Vol</th>
                <th scope="col">Add To Watchist</th>
                <th scope="col">Add To Holdings</th>

              </tr>
            </thead>
            {props.map(item => {
              let cls = "";
              let cls1 = "";
              if (item.changePercent * 100 > 0) { cls = "green"; } else { cls = "red"; }
              if (item.change > 0) { cls1 = "green"; } else { cls1 = "red"; }

              return (
                <tbody>
                  <tr>
                    {/* <th scope="row"><Link to={"/holdings/1"}>{item.symbol}<br /><small>{item.companyName}</small></Link></th> */}
                    <th scope="row"><Link to={"/stock/" + item.symbol}>{item.symbol}<br /><small>{item.companyName}</small></Link></th>
                    <td>
                      <NumberFormat value={item.latestPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </td>
                    <td className={cls1}>
                      <NumberFormat value={item.change} displayType={'text'} thousandSeparator={true} decimalScale={2} />
                    </td>
                    <td className={cls}>
                      <NumberFormat value={item.changePercent * 100} displayType={'text'} thousandSeparator={true} decimalScale={2} />

                    </td>
                    <td>

                      <NumberFormat value={item.iexVolume} displayType={'text'} thousandSeparator={true} />

                    </td>

                    <td>
                      <NumberFormat value={item.avgTotalVolume} displayType={'text'} thousandSeparator={true} />
                    </td>
                    <td><Link to="#"><i onClick={() => watchMe(item.symbol)} className="fa fa-eye fa-2x" aria-hidden="true"></i></Link></td>
                    <td><Link to="#"><i onClick={() => holdMe(item.symbol)} className="fa fa-briefcase fa-2x" aria-hidden="true"></i></Link></td>

                  </tr>
                </tbody>
              )
            }
            )}
          </table>
        </p>
      </div>
    </div>
  );
}

export default Stocks;
