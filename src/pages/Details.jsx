import React from "react";
import "../styles/Details.css";
import Sharebar from "../components/Sharebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
import SeasonScroll from "../components/SeasonScroll";
import { useNavigate } from "react-router-dom";
function Details() {
    const navigate = useNavigate();

  return (
    <div className="detailsBody">
      <Navbar />
      {/* UPPER AREA */}
      <div className="upperDetails">
        <div className="primaryDetails">
          <div className="posterDiv">
            <img src="../ranks/4.jpg" alt="Poster" />
          </div>
        </div>

        <div className="secondaryDetails">
          <h1>Dr. Stone</h1>
          <p>
            <span className="rating" title="Rating">
              N/A
            </span>
            <span className="episodes" title="episodes">
              21 Eps
            </span>
            {/* <span>{` | `}</span> */}
            <span title="Genre(s)">Adventure, Sci-Fi</span>
          </p>
          <div className="actionButtons">
            <button className="PrimeCTA" onClick={() => (navigate('/watch'))}>Watch Now</button>
            <button className="BlindCTA">{`Details >`}</button>
          </div>
          <p className="description">
            In the year 5738, a mysterious phenomenon causes all of humanity to
            turn to stone. Thousands of years later, high school student Taiju
            awakens and finds himself in a world where civilization has been
            destroyed. With the help of his friend Senku, they set out to
            rebuild society using science.
          </p>
          {/* <Sharebar/> */}
        </div>

        <div className="tertiaryDetails">
          <h2>About</h2>
          <div className="detailsGrid">
            <div className="detailItem">
              <span className="detailLabel">Type:</span>
              <span className="detailValue">Anime</span>
            </div>
            <div className="detailItem">
              <span className="detailLabel">Status:</span>
              <span className="detailValue">Airing</span>
            </div>
            <div className="detailItem">
              <span className="detailLabel">Aired:</span>
              <span className="detailValue">Jul 2023 - Sep 2023</span>
            </div>
            <div className="detailItem">
              <span className="detailLabel">Episodes:</span>
              <span className="detailValue">21</span>
            </div>
            <div className="detailItem">
              <span className="detailLabel">Rating:</span>
              <span className="detailValue">N/A</span>
            </div>
          </div>
          <button className="wishlistBtn">Add to Wishlist +</button>
        </div>
      </div>
      <Sharebar />
      <SeasonScroll />
      {/* LOWER AREA */}
      <Grid />
      <Footer />
    </div>
  );
}

export default Details;
