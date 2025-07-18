import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Sharebar from "../components/Sharebar";
import Ranks from "../components/Ranks";
import seasons from "../Data/Seasons";
import "../styles/Home.css";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import ranks from "../Data/Ranks";
import Scroller from "../components/Scroller";
import SideBar from "../components/SideBar";
import Charts from "../components/Charts";

function Home() {
  console.log(seasons);
  return (
    <div className="homeBody">
      <Navbar />
      <Banner />
      <Ranks header={"Top 10"} rank={ranks} />
      <Sharebar />
      <Scroller season={seasons} header="Popular" />
      <div className="categoryWrapper">
        <div className="CategoryScrolls">
          <Scroller season={seasons} header="TV Series" />
          <Scroller season={seasons} header="Movies" />
          <Scroller season={seasons} header="Exclusives" />
        </div>
          <SideBar />
      </div>
      <Charts />
      <Grid />
      <Footer />
    </div>
  );
}

export default Home;
