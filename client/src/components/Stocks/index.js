import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import  Stocks from "./Stocks";

class Stock extends Component {
  state = {
     activeStocks: [],
     infocusStocks: [],
     gainers:[],
     losers:[],
     UserId:''
  };

  // // When the component mounts, load the next dog to be displayed
  componentDidMount() { 
    this.loadActiveStocks();
    this.loadInfocusStocks();
    this.loadGainerStocks();
    this.loadLoserStocks();
  }

  //loading Active stocks in the home page
  loadActiveStocks =  () => {
     API.getActiveStocks()
      .then( res => 
         this.setState({
          activeStocks: res.data
        })
      )
      .catch(err => console.log(err));
  };
  //loading Infocus stocks in the home page
  loadInfocusStocks =  () => {
    API.getInfocusStocks()
     .then( res => 
        this.setState({
         infocusStocks: res.data
       })
     )
     .catch(err => console.log(err));
 };
  
 //loading gainer stocks in the home page
 loadGainerStocks=  () => {
  API.getGainers()
   .then( res => 
      this.setState({
       gainers: res.data
     })
   )
   .catch(err => console.log(err));
};
 //loading losers stocks in the home page
 loadLoserStocks=  () => {
  API.getLosers()
   .then( res => 
      this.setState({
       losers: res.data
     })
   )
   .catch(err => console.log(err));
};

  render() {

    return (
      <div>       


<ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
  { Stocks(this.state.activeStocks, "Active Stocks","aclass") }
    
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  { Stocks(this.state.infocusStocks, "Infocus Stocks","iclass") }
  
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  { Stocks(this.state.gainers, "Gainers","gclass") }   
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
  { Stocks(this.state.losers, "Losers","lclass") }   
  </li>
</ul>
     
    

      </div>
    );
    }
  
}
export default Stock;

