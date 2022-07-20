import gift from './components/profile-rewards.webp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/home-footer.svg'
import '../src/components/profile-rewards.webp'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import newoicon1 from './components/wl-cm-1.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import gift_rewards from './components/welcome-gt-img.webp';
import gift_coin from './components/wl-bonus-icon.png';


function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (

    <div className='body_div'>
      <Container>
        <Row>
          <Col><div className='logo_left'>
            <a href='#backtohome' style={{ color: 'white' }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg></a>
          </div>

            <div className='text_left1'>
              Rewards
            </div>
          </Col>
          <Col>
            <img src={gift} className="image_gift" alt="logo"></img>
          </Col>
        </Row>
      </Container>
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
      <Container>
        <div>
          <div className='text-freegifts1'>
            NEWO Reward program is designed to shower you with loads of rewards in the form of NEWO Coin. Along with that you can also win other exciting gifts by participating in numerous in-app activities.
          </div>
        </div>
      </Container>
      <br></br>
      <Container>
        <Row>
          <Col>
            <Card onClick={() => setModalShow(true)} className='cards'>
              <Card.Body>
                <center><img src={newoicon1} className="newoicon1" alt="logo" /></center>
                <center><Card.Title>Welcome Bonus</Card.Title></center>
              </Card.Body>
              <center><Card.Footer className="textmuted">Applied</Card.Footer></center>
            </Card>
          </Col>
          <Col>
            <Card onClick={() => setModalShow(true)}>
              <Card.Body>
                <center><img src={newoicon1} className="newoicon1" alt="logo" /></center>
                <center><Card.Title>7 Day Bonus</Card.Title></center>
              </Card.Body>
              <center><Card.Footer className="textmuted">Applied</Card.Footer></center>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row>
          <Col>
            <Card onClick={() => setModalShow(true)}>
              <Card.Body>
                <center><img src={newoicon1} className="newoicon1" alt="logo" /></center>
                <center><Card.Title>15 Day Bonus</Card.Title></center>
              </Card.Body>
              <center><Card.Footer className="textmuted">Applied</Card.Footer></center>
            </Card>
          </Col>
          <Col>
            <Card onClick={() => setModalShow(true)}>
              <Card.Body>
                <center><img src={newoicon1} className="newoicon1" alt="logo" /></center>
                <center><Card.Title>1 Month Bonus</Card.Title></center>
              </Card.Body>
              <center><Card.Footer className="textmuted">Available in 4 days</Card.Footer></center>
            </Card>
          </Col>
        </Row>
      </Container>
      <div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      <br></br><br></br>
    </div>

  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
      <Modal.Body>
      <h2>Rewards</h2>
        <br></br>
        <h1>WELCOME BONUS</h1>
        <p>
        <center><img src={gift_rewards} className="gift_rewards" alt="logo2" /></center>
        <p _ngcontent-gug-c80=""><img _ngcontent-gug-c80="" src={gift_coin} className="gift_coin"/><span _ngcontent-gug-c80=""> 50</span></p><br></br><p _ngcontent-gug-c80="">NEWO COIN</p>
        </p>
        <br></br>
        <p><center>
        <Button onClick={props.onHide} className="btn-primary">Activate</Button>
        </center></p>
      </Modal.Body>
    </Modal>
  );
}
export default App;