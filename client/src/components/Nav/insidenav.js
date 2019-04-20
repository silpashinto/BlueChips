import React from "react";
import "./style.css";

function Insidenav() {
    return (
        <div>
            {/* <button type="button" class="btn btn-primary">
        Welcome <span class="badge badge-light">Silpa</span>
    </button> */}
        <nav class="nav nav-pills justify-content-end">
           
            <a class="nav-item nav-link" href="#">Holdings</a>
            <a class="nav-item nav-link" href="#">WatchList</a>
            <a class="nav-item nav-link" href="#">SignOut</a>
        </nav>
        </div>
        
    );
}

export default Insidenav;

