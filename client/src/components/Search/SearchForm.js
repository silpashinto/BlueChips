import React from "react";
import "./search.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        {/* <label htmlFor="search">Search:</label> */}
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Enter Stock Ticker To Search ..."
          id="search"
        />
        <div> 
          <span>
            <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
              Search
            </button>
            <button onClick={props.handleFormClear} className="btn btn-primary mt-3">
              Clear
            </button>
        </span>
        </div>
        
      </div>
    </form>
  );
}

export default SearchForm;
