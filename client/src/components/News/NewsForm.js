import React from "react";

function NewsForm(props) {
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
          placeholder="Enter Stock Ticker"
          id="search"
        />
        <div> 
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
        </div>
        
      </div>
    </form>
  );
}

export default NewsForm;
