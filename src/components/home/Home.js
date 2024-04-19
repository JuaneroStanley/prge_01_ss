import React from "react";
import "./Home.css";
import map_wat from "./map.png";

function Home({ text }) {
  return (
    <div className="home">
      <div className="home_top">
        <button className="home_top_button">O projekcie</button>
      </div>

      <div className="home_bottom">
        <div className="home_left">
          <img className="map_wat" src={map_wat} alt="map_wat"></img>
        </div>

        <div className="home_right">
          <div className="home_right_title">GEOPORTAL</div>

          <div className="home_right_subtitle">
            Strona internetowa z interaktywną mapą
          </div>

          <button className="home_right_button">START</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
