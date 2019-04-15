import axios from "axios";

const BASEURL = "https://api.iextrading.com/1.0/stock/";
const APIKEY = "";

// Export an object with a "search" methods that searches the API for the passed stock ticker or get the news
export default {
  search: function(query) {
    console.log(BASEURL + query + '/quote');
    return axios.get(BASEURL + query + '/quote');
    
    
  },

  searchNews: function(query) {
    console.log(BASEURL + '/news');
    return axios.get(BASEURL + query + '/quote');
  }
};
