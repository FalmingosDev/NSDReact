import React from "react";
import "./App.css";
import "./components/navbar.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Banner1 from "./images/banner.webp";
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

      <Container>
        <div className='card-freegifts'>
          <Container className='container1'>
            <Row>
              <Col className='gift_border'>
                <div className='banner_text1'>FREE GIFTS</div><div className='banner_text2'> EVERY DAY</div>
              </Col>
              <Col>
                <div className='banner_text3'> EXCITING</div><div className='banner_text2'>ISN'T IT?</div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default App;
