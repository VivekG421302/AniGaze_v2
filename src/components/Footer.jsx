import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="upperside">
        <a href="/">
          <img
            src="./assets/AniGaze white.png"
            alt="Anigaze Logo"
            className="uppersidelogo"
          />
        </a>
        <div className="navShare">
          <a href="">
            <img src="./assets/discord.svg" alt="discord" />
          </a>
          <a href="">
            <img src="./assets/telegram.svg" alt="telegram" />
          </a>
          <a href="">
            <img src="./assets/reddit.svg" alt="reddit" />
          </a>
          <a href="">
            <img src="./assets/twitter.svg" alt="twitter" />
          </a>
        </div>
      </div>

      <div className="lowerside">
        <div className="lowerinfo">
          <ul className="infolinks">
            <li>
              <a href="/" className="footlink">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="/" className="footlink">
                Discription
              </a>
            </li>
            <li>
              <a href="/" className="footlink">
                Feedback
              </a>
            </li>
            <li>
              <a href="/" className="footlink">
                FAQs
              </a>
            </li>
          </ul>
          <div className="lowerabout">
            <p className="lowerinfodesc">
              &copy; AniGaze is an Anime Streaming site which helps you dive
              deep into the world of anime and stay in touch with the wonderful
              paradoy of stories.
            </p>
          </div>
        </div>
        {/* <div className="footnav">
          <a href="#navbar">
            <img width="50" height="50" src="./up.svg" className="footnavimg" alt="up" />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
