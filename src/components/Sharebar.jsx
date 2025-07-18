import React from "react";
import "../styles/Sharebar.css";

function Sharebar() {
  return (
    <div className="barbody" id="barbody">
      <div className="sharebar">
        <img src="./assets/luffygif.webp" alt="giphy" />
        <h2 className="sharetitle">Share AniGaze to watch together</h2>
      </div>
      <div className="shareimg">
        <img src="./assets/discord.svg" alt="" />
        <img src="./assets/telegram.svg" alt="" />
        <img src="./assets/reddit.svg" alt="" />
        <img src="./assets/twitter.svg" alt="" />
      </div>{" "}
    </div>
  );
}

export default Sharebar;
