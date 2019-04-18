import React from "react";
import "./style.css";

function Stocks(props, type) {
  console.log(props[0]);
  return (
   
    <div className="card text-white bg-light mb-3 stkTable">
      <div className="card-header">{type}</div>
      <div className="card-body">
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
              return (
                <tbody>
                  <tr>
                    <th scope="row">{item.symbol}<br /><small>{item.companyName}</small></th>
                    <td>{item.latestPrice}</td>
                    <td>{item.change}</td>
                    <td>{item.changePercent}</td>
                    <td>{item.iexVolume}</td>
                    <td>{item.avgTotalVolume}</td>
                    <td><i class="fa fa-eye fa-2x" aria-hidden="true"></i></td>
                    <td><i class="fa fa-briefcase fa-2x" aria-hidden="true"></i></td>

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
