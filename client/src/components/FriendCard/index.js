import React from "react";
import "./style.css";

const FriendCard = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
        <ul>
          <li>
            <strong></strong> {props.name}
          </li>
          <li>
            <strong></strong> {props.occupation}
          </li>
        </ul>
      </div>
  </div>
);


export default FriendCard;
