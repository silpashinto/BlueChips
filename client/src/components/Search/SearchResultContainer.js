import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../../utils/API";
import Modal from 'react-awesome-modal';

class Searches extends Component {
  state = {
    search: "",
    showResults: false,
    modal: false,
    results: []
  };

 
  closeModal() {
    this.setState({modal: false});
  }

  showModal() {
    this.setState({modal: true});
  };


  searchStocks = query => {
    if (query !== '') {
      API.search(query)
      .then (res => this.setState({ results: res.data, showResults: true}))
      .catch(err => this.showModal());
  
    } else {
    
      this.showModal();
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
        <Modal visible={this.state.modal} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                <div className="modalMessage">
                    <h1>Stock Search Error</h1>
                    <h3>Please be sure to enter a valid stock ticker symbol !</h3>
                    <button className="btn" onClick={() => this.closeModal()}>Close</button>
                </div>
            </Modal>
        <ResultList results={this.state.results} showResults={this.state.showResults} />
      </div>
    );
  
  } 
};

export default Searches;
