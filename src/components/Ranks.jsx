import React from "react";
import "../styles/Ranks.css";

function Ranks(props) {
  let ranks=props.rank
  console.log(`Ranks: ${ranks}\n ${props.header}\n ${props.rank}`);
  return (
    <>
      <div className="ranksBody" id="Ranks">
        <h2>{props.header}</h2>
        <div className="scrollWrapper">
          <div className="ranksScroller">
            {ranks.map((name, index) => (
              <div className="rankerCard" title={name}>
                <div className="titlePillar">
                  <h3 className="name">{name}</h3>
                  <h3 className="rank">{index + 1}</h3>
                </div>
                <div className="posterContainer">
                  <img src={`./ranks/${index + 1}.jpg`} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Ranks;
