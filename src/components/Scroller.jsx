import React from "react";
import "../styles/Scroller.css";
import { Link } from "react-router-dom";
import Card from "./Card";

function Scroller(props) {
const data = props.season; 
  console.log("first");
  return (
    <div className="ScrollerBody">
      <div className="ScrollerWrapper">
        <div className="headWrapper">
          <h2>{props.header}</h2>
          <Link to="/">{`See more >`}</Link>
        </div>
        <div className="ScrollWrapper">
          <div className="Scroller">
            {data.map((name) => (
              <Card data={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scroller;
