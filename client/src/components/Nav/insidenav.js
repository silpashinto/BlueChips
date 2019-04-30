import React from "react";
import "./style.css";
import UserProfile from "../Userprofile";
import { Link } from "react-router-dom";



function unsetUser(){
UserProfile.setuserId();
}
function Insidenav(props) {
    return (
        <div>
            {/* <button type="button" class="btn btn-primary">
        Welcome <span class="badge badge-light">Silpa</span>
    </button> */}
        <nav class="nav nav-pills justify-content-end">           
            <Link className="btn btn-secondary nav-item nav-link" to={"/holdings/" + props.userid}>Holdings</Link>
            <Link className="btn btn-secondary nav-item nav-link" to={"/watchlist/" + props.userid}>WatchList</Link>
            <a className="btn btn-secondary nav-item nav-link" href="/signout" onClick={() => unsetUser}>SignOut</a>
        </nav>
        </div>
        
    );
}

export default Insidenav;

