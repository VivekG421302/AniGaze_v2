import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { genreTags } from "../Data/Genre";

function Navbar() {
  const [showBackupSearch, setShowBackupSearch] = useState(false);

  return (
    <>
      <div className="navBody">
        <div className="leftNav">
          <details>
            <summary>
              <img src="./assets/menu.svg" alt="☰" />
            </summary>
            <nav className="NavbarBody">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
              <a href="#random" id="random">
                Random
              </a>
              <a href="#community" id="community">
                Community
              </a>
            </nav>
          </details>

          <NavLink to="/home" className="navLogo">
            <img src="./assets/AniGaze white.png" alt="Anigaze Logo" />
          </NavLink>

          <div className="searchBar" id="firstSearchBar">
            <input
              type="text"
              placeholder="Search anime..."
              className="searchInput"
            />
            <button className="searchButton">
              <img src="./assets/search.svg" alt="" />
            </button>

            <div className="navFilter">
              <select className="filterSelect">
                <option value="all">All</option>
                {genreTags.map((tag) => (
                  <option value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="otherNavs">
            <button className="navRandomizer navAddons" title="Random">
              <img src="./assets/random.svg" alt="Random" />
              <span>Random</span>
            </button>
            <button className="navCommunity navAddons" title="Community">
              <img src="./assets/commute.svg" alt="Community" />
              <span>Community</span>
            </button>
          </div>
        </div>

        <div className="rightNav">
          <div className="navShare">
            <a href="">
              <img src="./assets/discord.svg" alt="discord" id="navShareImgs" />
            </a>
            <a href="">
              <img
                src="./assets/telegram.svg"
                alt="telegram"
                id="navShareImgs"
              />
            </a>
            <a href="">
              <img src="./assets/reddit.svg" alt="reddit" id="navShareImgs" />
            </a>
            <a href="">
              <img src="./assets/twitter.svg" alt="twitter" id="navShareImgs" />
            </a>
          </div>
          <div
            className="searchToggle"
            onClick={() => setShowBackupSearch(!showBackupSearch)}
          >
            <img src="../assets/search.svg" alt="Toggle Search" />
          </div>
          <NavLink to={"/admin"} className="navProfile">
            <img src="./assets/profile.svg" alt="Profile" />
          </NavLink>
        </div>
        {showBackupSearch && (
          <div className="searchBar available" id="backUpSearcher">
            <input
              type="text"
              placeholder="Search..."
              className="searchInput"
            />
            <button className="searchButton">
              <img src="./assets/search.svg" alt="" />
            </button>

            <div className="navFilter">
              <select className="filterSelect">
                <option value="all">All</option>
                {genreTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
      <div className="navBorder"></div>
    </>
  );
}

export default Navbar;
