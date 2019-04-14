import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../../utils/API";

class Searches extends Component {
  state = {
    search: "",
    showResults: false,
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  // componentDidMount() {
  //   this.searchStocks("");
  // }

  searchStocks = query => {
    if (query !== '') {
      API.search(query)
      .then (res => this.setState({ results: res.data, showResults: true}),
      )
      .catch(err => console.log(err));
    } else {
      alert("Please enter a stock ticker to search ...");
    } 
  };
    

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchStocks(this.state.search);
  };


  // When the clear button clicked, reset the search API form and hide search results div
  handleFormClear = event => {
    event.preventDefault();
    this.setState({results: []});
    this.setState({search: ''});
    this.setState({showResults: false});
    

    };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} showResults={this.state.showResults} />
      </div>
    );
  }
}

export default Searches;
