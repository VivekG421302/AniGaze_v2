import React from "react";
import "../styles/Default.css";
import Sharebar from "../components/Sharebar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

function Default() {
  const navigate = useNavigate();
  return (
    <div className="defaultBody">
      <nav className="defNav">
        <ul>
          <li>
            <Link to="/home" >Home</Link>
          </li>
          <li>
            <a href="">TV</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a href="">Popular</a>
          </li>
          <li>
            <a href="">Top-Airing</a>
          </li>
        </ul>
      </nav>
      <div className="defHero">
        <div className="defHeroController">
          <Link to={"/home"} className="defLogo">
            <img src="./assets/AniGaze white.png" alt="AniGaze" />
          </Link>
          <div className="defSearchBar">
            <input
              type="text"
              placeholder="Search Anime..."
              id="defSearchInput"
            />
            <button onClick={()=>(navigate("/home"))} style={{cursor:"pointer"}}>
              <img src="./assets/search.svg" alt="Search" />
            </button>
          </div>
          <div className="defTopLinks">
            <a href="">Fullmetal Alchemist: Brotherhood</a>
            <a href="">Steins;Gate</a>
            <a href="">Hunter x Hunter (2011)</a>
            <a href="">Death Note</a>
            <a href="">One Punch Man</a>
            <a href="">Naruto: Shippuden</a>
            <a href="">One Piece</a>
            <a href="">Attack on Titan</a>
            <a href="">Demon Slayer: Kimetsu no Yaiba</a>
            <a href="">Jujutsu Kaisen</a>
            <a href="">Chainsaw Man</a>
            <a href="">Frieren: Beyond Journey's End</a>
          </div>
        </div>
        <div className="defHeroPoster">
          <img src="./assets/bitmo.png" alt="" title="Search There!" />
        </div>
      </div>
      <div className="defaultShareBar">
        <Sharebar />
      </div>
      <div className="blogSection">
        <h2>Latest Blog Posts</h2>
        <div className="blogContentWrapper">
          <div className="blogPosts">
            <div className="blogPost">
              <h3>Understanding Anime Genres</h3>
              <p>
                Dive into the diverse world of anime genres and discover what
                makes each unique.
              </p>
            </div>
            <br />
            <div className="blogPost">
              <h3>The Evolution of Animation</h3>
              <p>
                Explore how animation has evolved over the decades and its
                impact on storytelling.
              </p>
            </div>
            <br />
            <div className="blogPost">
              <h3>Top 10 Must-Watch Anime of 2023</h3>
              <p>
                Check out our list of the top 10 anime you shouldn't miss this
                year!
              </p>
            </div>
            <br />
            <div className="blogPost">
              <h3>Anime vs. Manga: What's the Difference?</h3>
              <p>
                A detailed comparison of anime and manga, their differences, and
                which one you should choose.
              </p>
            </div>
            <br />
            <div className="blogPost">
              <h3>Behind the Scenes of Anime Production</h3>
              <p>
                Get an insider's look at how your favorite anime is made, from
                concept to screen.
              </p>
            </div>
            <br />
            <div className="blogPost">
              <h3>Anime Culture Around the World</h3>
              <p>
                Discover how anime culture has spread globally and its influence
                on different societies.
              </p>
            </div>
            <br />
            <div className="blogPost">
              <h3>Anime Conventions: A Fan's Paradise</h3>
              <p>
                Learn about the excitement of anime conventions and what to
                expect when attending one.
              </p>
            </div>
            <br />
            <div className="blogPost">
              <h3>Anime Soundtracks: The Heart of the Show</h3>
              <p>
                Explore the importance of soundtracks in anime and how they
                enhance the viewing experience.
              </p>
            </div>
            <br />
            <div className="blogPost">
              <h3>Iconic Anime Characters and Their Impact</h3>
              <p>
                A look at some of the most iconic anime characters and their
                influence on pop culture.
              </p>
            </div>
            <br />
            <div className="blogPost">
              <h3>The Future of Anime: Trends to Watch</h3>
              <p>
                What does the future hold for anime? Explore upcoming trends and
                innovations in the industry.
              </p>
            </div>
            <br />
            <div className="blogPost">
              <h3>Anime and Mental Health: A Supportive Community</h3>
              <p>
                Discover how anime can provide comfort and support for mental
                health issues, fostering a sense of community among fans.
              </p>
            </div>
            <br />
            <div className="blogPost">
              <h3>Anime Merchandise: Collectibles and More</h3>
              <p>
                From figures to clothing, explore the world of anime merchandise
                and what makes it so appealing to fans.
              </p>
            </div>
            <br />
            <div className="blogPost">
              <h3>Anime Adaptations: From Manga to Screen</h3>
              <p>
                A deep dive into how manga is adapted into anime, the challenges
                faced, and the creative process involved.
              </p>
            </div>
          </div>
         <SideBar />
        </div>
      </div>
      <div className="defaultFooter">
        <Footer />
      </div>
    </div>
  );
}

export default Default;
