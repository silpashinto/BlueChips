import React from "react";
import "./style.css";

function Insidenav(props) {
    return (
        <div>
            {/* <button type="button" class="btn btn-primary">
        Welcome <span class="badge badge-light">Silpa</span>
    </button> */}
        <nav class="nav nav-pills justify-content-end">
           
            <a className="btn btn-secondary nav-item nav-link" href={"/holdings/" + props.userid}>Holdings</a>
            <a className="btn btn-secondary nav-item nav-link" href="#">WatchList</a>
            <a className="btn btn-secondary nav-item nav-link" href="/">SignOut</a>
        </nav>
        </div>
        
    );
}

export default Insidenav;

