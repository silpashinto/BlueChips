import React from "react";
import image1 from "../../images/bluechips.png";
import { Link } from "react-router-dom";

import "./style.css";

function Nav() {
  return (
    <div>
      <nav className="nav nav-pills nav-fill">
        <Link to="/"><img src={image1} alt="logo" className="img-thumbnail logo"></img></Link>
        <Link className="nav-item nav-link heading" to="/">Blue Chips</Link>
        {/* <small> Stock Tracker</small> */}


        <div className="nav justify-content-end items">

        &nbsp;
          <button type="button" className="btn btn-info" data-toggle="button" aria-pressed="false" >
            SignIn
</button> &nbsp;

          <button type="button" className="btn btn-secondary" data-toggle="button" aria-pressed="false" >
            SignUp</button> &nbsp;

        </div>

      </nav>
    </div>
  );
}

export default Nav;

