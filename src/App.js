import React from "react";
import "./App.css";
import "./components/navbar.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Banner1 from "./images/banner.webp";
import Clan from "./icons/clan.webp";
import Containers from "./components/containers";
import multiplex from "./icons/multiplex.webp";
import news from "./icons/news.webp";
import street from "./icons/street.webp";
import Video from "./components/video";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="mainContainer">
          <div className="banner">
            <Banner name={"Santapan"} />
            <img src={Banner1} alt="" className="background" />
          </div>
          <div className="newoclan">
            <img src={Clan} alt="" className="newopng"></img>
            <a href="/" className="newoitem">
              ENJOY NOW
            </a>
          </div>
          <div className="maincontainer row">
            <Containers imgname={multiplex} name="Multiplex" className="img1" />
            <Containers imgname={news} name="News" />
            <Containers imgname={street} name="Street" />
          </div>
          <Video className="vid" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
