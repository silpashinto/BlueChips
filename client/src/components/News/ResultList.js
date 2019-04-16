import React from "react";

function ResultList(props) {
  console.log(props);
  return (
    <div className="newsResults">
     <table>
        <tr>
          <th>Headline:</th>
          <th>Source:</th>
          <th>Link:</th>
          <th>Summary</th>
          <th>Image:</th>
        </tr>
        <tr>
          <td>{props.results.headline}</td>
          <td>{props.results.source}</td>
          <td>{props.results.url}</td>
          <td>{props.results.summary}</td>
          <td>{props.results.image}</td>
 
        </tr>
      </table>
    </div>

  )
}

export default ResultList;
