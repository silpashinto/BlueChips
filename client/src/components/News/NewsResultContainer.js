import React, { Component } from "react";
// import NewsForm from "./NewsForm";
import ResultList from "./ResultList";
import API from "../../utils/API";

class News extends Component {
  state = {
    results: []
  };

  // When this component mounts, search the API for news
  componentDidMount() {
    API.getNews()
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };
  

  

  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // // When the form is submitted, search the Giphy API for `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchStocks(this.state.search);
  // };

  render() {
    return (
      <div>
        <ResultList results={this.state.results} />
      </div>
    );
  };

};

export default News;
