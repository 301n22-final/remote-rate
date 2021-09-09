import React from 'react';
import '../css/AboutUs.css';
import { Carousel, Container, Jumbotron } from 'react-bootstrap'
import charlieProfile from '../img/profile-Charlie-lanscape-theme.jpg'
import zachProfile from '../img/Zachary Final.jpg'
import quenProfile from '../img/Quen.JPG'
import philProfile from '../img/phil-pic.jpg'


class AboutUs extends React.Component {
  render() {
    return (
      <>

        <Jumbotron className="mt-3 shadow-lg p-3 mb-5 rounded aboutUsJumbotron border">
          <h1 className="starring">Remote Rate, Starring:</h1>

        </Jumbotron>
        <Container>
          <Carousel className=" m-auto w-50">
            <Carousel.Item className="containerAbout">
              <img
                className="d-block w-100 min-vh-50"
                src={zachProfile}
                alt="First slide"
              />
              <Carousel.Caption className="overlay">

                <p className="text"><span className="imageName">Zach Winterton</span><br /><br />
                  Veteran, software developer, stock trader. I also worked for a surveying and engineering firm for a while. I live in Idaho. Hobbies include fishing, cooking, landscaping. I like to work with my hands, I spend a lot of my free time restoring my home and learning a lot of the trades that go along with that. So I'm becoming a bit of a jack of all trades master of none, at least not yet.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="containerAbout">
              <img
                className="d-block w-100"
                src={charlieProfile}
                alt="First slide"
              />
              <Carousel.Caption className="overlay">

                <p className="text">
                  <span className="imageName">Charlie Fadness</span><br /><br />

                  Massage Therapist to Software Developer <br /><br />

                  Hiking, playing games, watching anime, and movies are some of my favorite hobbies. Helping people has always been a thing I love to do! Seeing the joy and motivation you can bring to someone is always a wonderful knowing that I can do that with coding and help those around me to push ourselves will be something I look forward to!
<br/>

                </p>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="containerAbout">
              <img
                className="d-block w-100"
                src={philProfile}
                alt="First slide"
              />

              <Carousel.Caption className="overlay">

                <p className="text">
                  <span className="imageName">Phil Murphy</span><br /><br />

                  Veteran, software developer, father of two daughters and a son on the way! I'm love golf, basketball, and playing soccer with my daughters. In my spare time I like to... nevermind, between CodeFellows and work I don't have spare time 🤪.</p>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="containerAbout">
              <img
                className="d-block w-100"
                src={quenProfile}
                alt="First slide"
              />
              <Carousel.Caption className="overlay">

                <p className="text">
                  <span className="imageName">Quentin Young</span><br /><br />

                  I grew up on a dairy farm in the hills of  Vermont. In 2013, I enlisted in the Navy directly after graduating from the University of New Hampshire. I've always enjoyed math and logic. I decided to pursue software and not only start a career in development, but to pursue my masters in engineering. Outside of writing software I'm a marathoner (Boston Marathon qualifier), mountaineer (Mt. Whitney, highest in lower 48), and skier! I'm currently training for an Ultra Marathon in the Olympic mountains this fall.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <div className="bottomSpace">.</div>
      </>
    );
  }
}

export default AboutUs;
