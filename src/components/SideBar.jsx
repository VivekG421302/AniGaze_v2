import React from "react";
import "../styles/SideBar.css";
import { genreTags } from "../Data/Genre";

function SideBar() {

  return (
    <>
      <aside className="blogSidebar">
        <h3 className="bloggersSpace">Trending Topics</h3>
        <ul className="bloggersSpace">
          <li>
            <a href="">Isekai Boom in 2025?</a>
          </li>
          <li>
            <a href="">Top Waifus of the Year</a>
          </li>
          <li>
            <a href="">Most Awaited Sequels</a>
          </li>
          <li>
            <a href="">Anime That Changed the Industry</a>
          </li>
          <li>
            <a href="">Best Anime Openings of All Time</a>
          </li>
          <li>
            <a href="">Underrated Gems You Might've Missed</a>
          </li>
          <li>
            <a href="">Manga vs Anime: What Tells the Story Better?</a>
          </li>
          <li>
            <a href="">Top Anime Villains Ranked</a>
          </li>
          <li>
            <a href="">Anime That Deserve a Season 2</a>
          </li>
          <li>
            <a href="">Classic 90s Anime Worth Watching Today</a>
          </li>
        </ul>

        <h3 className="bloggersSpace">Anime Quote of the Day</h3>
        <blockquote className="bloggersSpace">
          “A lesson without pain is meaningless.” <br />
          <span>– Edward Elric</span>
        </blockquote>

        <h3>Tags</h3>
        <div className="tags">
          {genreTags.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </aside>
    </>
  );
}

export default SideBar;
