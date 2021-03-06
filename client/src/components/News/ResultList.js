import React from "react";
import './news.css';

function ResultList(props) {
  console.log("news props", props);
  return (
        <div id="tickr-box">
          <div className="tickr-title">Latest News</div>
          <div id="tickr-scroll">
          <ul>
          {props.results.map(result => {
            return (
              
                <li><br></br><span className="newshead">{result.headline}</span>{result.summary}</li>
            )
            }
          )}
         </ul>
         </div>

      </div>
  )
}

export default ResultList;
