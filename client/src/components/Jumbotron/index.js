import React from "react";
import "./style.css";

function Jumbotron(props){
    return <div class="jumbotron">{props.children}</div>;
}

export default Jumbotron;