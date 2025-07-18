import React from "react";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";

function Banner() {
  navigation = useNavigate();
  const bannerTitles = [
    "One Piece",
    "Dr Stone",
    "One Punch Man",
    "Dragon Ball Z",
    "Attack on Titan",
    "One Piece",
  ];
  return (
    <div className="HeroCurrosal">
      <div className="visuals">
        {bannerTitles.map((title, index) => (
          <div className={`pane${index + 1} visualPanes`} key={index}>
            <div className="innerPane1 internalPane">
              <span>{`#${index + 1} Spotlight`}</span>
              <h1>{title}</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                beatae a ullam harum exercitationem laborum! Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Tenetur ipsum provident
                iste doloribus molestias minus dolore dicta consequatur rem
                corporis.
              </p>
              <div>
                <button onClick={()=>(navigation("/watch"))} className="PrimeCTA">Watch Now</button>
                <button onClick={()=>(navigation("/details"))} className="BlindCTA">{`Details >`}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
