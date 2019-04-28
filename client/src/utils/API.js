import axios from "axios";

const BASEURL = "https://api.iextrading.com/1.0/stock/";
const INFOCUSURL = "https://api.iextrading.com/1.0/stock/market/list/infocus";
const ACTIVESTOCKSURL = "https://api.iextrading.com/1.0/stock/market/list/mostactive";
const GAINERSURL ="https://api.iextrading.com/1.0/stock/market/list/gainers";

// Export an object with a "search" methods that searches the API for the passed stock ticker or get the news
export default {
  
  search: function(query) {
    console.log(BASEURL + query + '/quote');
    if (query!=="") {
      return axios.get(BASEURL + query + '/quote');
    }   
  },
  getNews: function(){
    let query = "market/news/last/10";
    console.log(BASEURL + query);
    return axios.get(BASEURL + query);
  },
  getActiveStocks:function(){
    console.log(ACTIVESTOCKSURL);
    return axios.get(ACTIVESTOCKSURL);
  },
  getInfocusStocks:function(){
    console.log(INFOCUSURL);
    return axios.get(INFOCUSURL);
  },
  getGainers:function(){
    console.log(GAINERSURL);
    return axios.get(GAINERSURL);
  },
  getChart6m: function(query) {
    console.log("chart query is " ,BASEURL + query);
    return axios.get(BASEURL + query + '/chart/6m');
  },
  signUp: function(userData){
    return axios.post("/api/user/signup", userData);
  },
  getHoldings: function(userData){
    return axios.get("/api/stocks/holdings", userData);
  },
  getCompany: function(query){
    return axios.get(BASEURL + query + '/company');
  },
  getWatchlist: function(userData){
    return axios.get("/api/stocks/watchlist", userData);
  },
  getStockById: function(Stockid){
    return axios.get("/api/stocks/:id", Stockid);
  },
  signIn: function(userData){
    return axios.post("/api/user/signin", userData);
  }

};
