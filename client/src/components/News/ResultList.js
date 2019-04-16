import React from "react";
import './news.css';

function ResultList(props) {
  console.log("news props",props);
  return (
    <div>
      <div className="newsHeader"> 
        <h3> Stock Market News </h3>
      </div>
      <div>
      {/* <div className="table newsResults" style={{visibility: "visible" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Headline</th>
                <th scope="col">Summary</th>
                <th scope="col">Link</th>
                <th scope="col">Source</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
            </table> */}
            <ul>
              {props.results.map( result => {
                return (
                  <div>
                  <li>{result.headline}{result.summary}<a href={result.url} target="_blank">{result.url}</a></li>

                  <br></br>
                  </div>
                )
                {/* // return (
                //   <tr>
                //   <th scope="row"></th>  
                //   <td>{result.headline}</td>
                //   <td>{result.summary}</td>
                //   <td>{result.url}</td>
                //   <td>{result.source}</td>
                //   <td>{result.image}</td>
                //   </tr>
                // ) */}
              })}
            </ul>

          
        </div>
    </div>
  ) 
}

export default ResultList;
