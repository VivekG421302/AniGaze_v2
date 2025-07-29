import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";

function Card({ data }) {
  if (!data) return null;

  const {
    Title,
    Episodes,
    Genre,
    "Genre(s)": genres,
    Description,
    Cover,
    rating,
    isSeason,
  } = data;

  const genreString = genres || Genre || "Unknown";
  const episodeCount = Episodes || "0";
  const season = isSeason || "1";
  const coverImg = `/Cover/${Cover}.jpg`; // adjust if image path differs

  return (
    <Link to="/details#Navbar" className="cardBody">
      <div className="cardFace">
        <div className="cardPoster" >
          <img src={coverImg} alt={Title} className="cardImg" />
        </div>
        {/* <div className="cardTitle">
          <h4>{Title}</h4>
          <p>{`${12} Eps`}</p>
        </div> */}
      </div>
      <div className="cardBack">
        <div className="Stats">
          <h3 title={Title}>{Title}</h3>
          <div className="primeStats">
            <span className="rate" title="rate">{rating !== "N/A" ? rating : "N/A"}</span>
            <span className="eps" title="eps">{episodeCount}</span>
            <span className="season" title="season">{season}</span>
          </div>
          <div className="followGenre">{genreString}</div>
        </div>
        <div className="Desc">
          {Description || "No description available."}
        </div>
        <div className="CTAs">
          <button className="watch">Watch Now!</button>
          {/* <button className="knowMore">Details</button> */}
        </div>
      </div>
    </Link>
  );
}

export default Card;
