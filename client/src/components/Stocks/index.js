import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import  Stocks from "./Stocks";

class Stock extends Component {
  state = {
     activeStocks: [],
     infocusStocks: [],
     gainers:[]
  };

  // // When the component mounts, load the next dog to be displayed
  componentDidMount() { 
    this.loadActiveStocks();
    this.loadInfocusStocks();
    this.loadGainerStocks();
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

  render() {

    return (
      <div>       
      { Stocks(this.state.activeStocks, "Active Stocks") }
      { Stocks(this.state.infocusStocks, "Infocus Stocks") }
      { Stocks(this.state.gainers, "Gainers") }

      </div>
    );
    }
  
  
}
export default Stock;

