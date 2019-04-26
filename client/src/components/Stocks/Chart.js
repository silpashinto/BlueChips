import React from "react";
var LineChart = require("react-chartjs").Line;

function Chart(props) {
   
    console.log("chart props", props);
  
    //Closing price chart data
   let close = []

   {props.props.map( result =>{
       close.push(result.close);
       return null;
   })};


   // Volume chart data 
   let volume = []

   {props.props.map( result =>{
       volume.push(result.volume / 1000);
       return null;
   })};

   let chartData = {
       labels: [],
       datasets: [
           {
               
               fillColor: "rgba(220,220,220,0)",
               strokeColor: "rgba(220,220,220,1)",
               pointColor: "rgba(220,0,220,1)",
               pointStrokeColor: "#fff",
               pointHighlightFill: "#fff",
               pointHighlightStroke: "rgba(220,220,220,1)",
               data: close
                 
           }
       ]  
   }

   let chartData1 = {
       labels: [],
       datasets: [
           {
               fillColor: "rgba(220,220,220,0)",
               strokeColor: "rgba(220,220,220,1)",
               pointColor: "rgba(0,220,220,1)",
               pointStrokeColor: "#fff",
               pointHighlightFill: "#fff",
               pointHighlightStroke: "rgba(220,220,220,1)",
               data: volume   
           }
       ]
   }


   return (
       <div>
           <h5>Daily Closing Price Last 6 Months</h5>
           <LineChart data={chartData}  width="700" height="350"  />
           <h5>Daily Volume Last 6 Months</h5>
           <LineChart data={chartData1} width="700" height="350" />
       </div>
   )



   
}



export default Chart;