import React from "react";
import "./App.css";
import "./components/navbar.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Banner1 from "./images/banner.webp";
import Banner2 from "./images/net-star.webp";
import Banner3 from "./images/Newo hashtag.webp";
import Banner4 from "./images/n-games.webp";
import Clan from "./icons/clan.webp";
import Containers from "./components/containers";
import Container from 'react-bootstrap/Container';
import multiplex from "./icons/multiplex.webp";
import news from "./icons/news.webp";
import street from "./icons/street.webp";
import Video from "./components/video";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
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
          <div className="maincontainer2">
            <Row>
              <Col><Containers imgname={multiplex} name="Multiplex" /></Col>
              <Col><Containers imgname={news} name="News" /></Col>
              <Col><Containers imgname={street} name="Street" /></Col>
            </Row>
          </div>

          <Video className="vid" />
        </div>
      </main>

      <Footer />

      <div className="newoclan2">
        <Row>
          <Col>
            <img src={Banner2} alt="" className="netwoodpng"></img>
          </Col>
          <Col classname="newoitem">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#c3b5f2" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg>
          </Col>
        </Row>
      </div>
      <div className="newoclan2">
      <Row>
          <Col>
            <img src={Banner3} alt="" className="netwoodpng"></img>
          </Col>
          <Col classname="newoitem">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#c3b5f2" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg>
          </Col>
        </Row>
      </div>
      <div className="newoclan2">
      <Row>
          <Col>
            <img src={Banner4} alt="" className="netwoodpng"></img>
          </Col>
          <Col classname="newoitem">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#c3b5f2" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
