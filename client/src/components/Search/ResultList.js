import React from "react";

function ResultList(props) {
  console.log(props);
  return (
    <div className="searchResults">
     <table>
        <tr>
          <th>Date:</th>
          <th>Ticker:</th>
          <th>Company:</th>
          <th>Sector:</th>
          <th>Close:</th>
          <th>Change:</th>
        </tr>
        <tr>
          <td>{props.results.latestTime}</td>
          <td>{props.results.symbol}</td>
          <td>{props.results.companyName}</td>
          <td>{props.results.sector}</td>
          <td>{props.results.close}</td>
          <td>{props.results.change}</td>
        </tr>
      </table>
    </div>

  )
}

export default ResultList;
