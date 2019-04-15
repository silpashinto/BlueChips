import React from "react";
import "./search.css";

function ResultList(props) {
  console.log(props.results);
  console.log(props.showResults);
  if (props.showResults===true) {
    return (
      <div className="table searchResults" style={{visibility: "visible" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Ticker</th>
                <th scope="col">Company</th>
                <th scope="col">Sector</th>
                <th scope="col">Close</th>
                <th scope="col">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{props.results.latestTime}</td>
                <td>{props.results.symbol}</td>
                <td>{props.results.companyName}</td>
                <td>{props.results.sector}</td>
                <td>{props.results.close}</td>
                <td>{props.results.change}</td>
  
              </tr>
            </tbody>
          </table>
        </div>
  
  
    )
  } else {
    return(
      <div className="searchResults">
        <h3>Stock Ticker Not Found ... </h3>
      </div>
    )
  }
  
};

export default ResultList;
