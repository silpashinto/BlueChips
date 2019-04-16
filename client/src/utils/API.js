import axios from "axios";

const BASEURL = "https://api.iextrading.com/1.0/stock/";

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
  }
};
