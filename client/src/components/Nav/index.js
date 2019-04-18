import React from "react";
import image1 from "../../images/bluechips.png";
import "./style.css";

function Nav() {
  return (
    <div>
      <nav className="nav nav-pills nav-fill">
        {/* <img src={image1} alt="logo" className="img-thumbnail logo"></img> */}
        <a className="nav-item nav-link heading" href="#">Blue Chips
      </a>
        {/* <small> Stock Tracker</small> */}


        <div className="nav justify-content-end items">

        &nbsp;
          <button type="button" class="btn btn-info" data-toggle="button" aria-pressed="false" autocomplete="off">
            SignIn
</button> &nbsp;

          <button type="button" class="btn btn-secondary" data-toggle="button" aria-pressed="false" autocomplete="off">
            SignUp</button> &nbsp;

        </div>

      </nav>
    </div>
  );
}

export default Nav;

