import React from "react";
import image1 from "../../images/bluechips.png";

function Nav() {
  return (
    <div>
    <nav className="nav nav-pills nav-fill">
      <img src={image1} alt="logo" style={{height:100}}></img>
      <a className="nav-item nav-link" href="#">Blue Chips Stock Tracker</a>
    
    
    
      <ul className ="nav justify-content-end">

        <li className ="nav-item">
          <a className ="nav-link" href="#">Login</a>
        </li>
        <li className ="nav-item">
          <a className ="nav-link" href="#">Register</a>
        </li>

        </ul>

    </nav>
  </div>
  );
}

export default Nav;

