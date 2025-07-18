import React from "react";
import "../styles/SeasonScroll.css";
import seasons from "../Data/Seasons";

function SeasonScroll() {
  const finder = 1;
  return (
    <div className="lowerDetails">
      <h2>Seasons</h2>
      <div className="seasonScroller">
        {seasons.map((x, index) =>
          finder == x.UID ? (
            <div className="thumbCards" key={index}>
              <div
                className="thumbBackground"
                style={{
                  backgroundImage: `url(./Cover/${x.Cover}.jpg)`,
                }}
              ></div>
              <h3 className="thumbTitle">
                {x.isSeason === "Special" ? x.isSeason : `Season ${x.isSeason}`}
              </h3>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default SeasonScroll;
