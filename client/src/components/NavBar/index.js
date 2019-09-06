import React from "react";
import "./style.css";

function NavBar(props){
    return <nav className="navbar navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1"></span>{props.children}
  </nav>
}

export default NavBar;