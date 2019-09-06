import React from "react";
import "./style.css";

function Jumbotron(props){
    return <div className="jumbotron">{props.children}</div>;
}

export default Jumbotron;