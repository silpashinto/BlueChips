import React from "react";
import "./style.css";
import UserProfile from "../Userprofile";


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
            <a className="btn btn-secondary nav-item nav-link" href={"/holdings/" + props.userid}>Holdings</a>
            <a className="btn btn-secondary nav-item nav-link" href="/signout" onClick={() => unsetUser}>SignOut</a>
            <a className="btn btn-secondary nav-item nav-link" href={"/watchlist/" + props.userid}>WatchList</a>
        </nav>
        </div>
        
    );
}

export default Insidenav;

