import axios from "axios";

const BASEURL = "https://api.iextrading.com/1.0/stock/";
const APIKEY = "";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    console.log(BASEURL + query + '/quote');
    // return axios.get(BASEURL + query + APIKEY);
    return axios.get(BASEURL + query + '/quote');
  }
};
