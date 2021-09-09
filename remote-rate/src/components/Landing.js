import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import '../css/Landing.css';
import { Button, Spinner, Container, Card, Row, Col } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      working: '',
    }
  }

  componentDidMount = async () => {
    try {
      const { getIdTokenClaims } = this.props.auth0;
      let tokenClaims = await getIdTokenClaims();
      const jwt = tokenClaims.__raw;
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
      }
      const serverResponse = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/landing`, config);
      this.setState({
        working: `This is working: ${serverResponse.data.email_verified}`,
      })
    } catch (err) {
      console.log('component did mount error', err)
    }
  }
  render() {
    const { isLoading } = this.props.auth0;
    if (isLoading) {
      return (<Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
      );
    } else {
      return (
        <Container className="vh-100">
          <Row>
            <h1 className='
            h1 
            p-3 
            mb-2 
            rounded
            text-warning'>
              Welcome to Remote Rate</h1>
          </Row>
          <Row 
          >
            <Col>
              <Jumbotron >
                <Card className="sample m-3">
                  <p className="catchWords">
                    <span
                      className="d-block p-2 grey ">
                      Get the money you deserve! Say it with me!
                    </span>
                    <span
                      className="d-block p-2 blue text-white font-2">
                      It's my Money and I want it NOW!
                    </span>
                  </p>
                </Card>
                


              </Jumbotron>
            </Col>
          </Row>


          {this.props.auth0.isAuthenticated ?
          <>
            <Row>
              <Col>
                <Jumbotron className="onceLogedIn">
                  <Card className="logInText">
                    <p>
                      Welcome! Now you can begin your adventure to get your money's worth! Head over to the profile page to start creating your offer!
                      
                    </p>
                    <hr />
                    <p className="mb-0">
                      Once you have created your profile, you can start adding offers.<br/>
                      You can then compare your offers on the Compare page.
                    </p>
                  </Card>
                </Jumbotron >
              </Col>
            </Row>
              <div className="bottomSpace2 ">Wow</div>
            </>
            :
              <aside className="infoBox">
                <Card className="cardLeft">
                  <Card.Header>
                    To begin
                  </Card.Header>
                <section 
                className="welcomeCard"
                >
                  We welcome you to explore the options of working fully remote! <br />
                  Here you will be able to compare your current work with your new work offer!<br />
                  <br/>
                  Please log in to access your profile to begin comparing your job offers
                </section>
                </Card>
                <Card className="cardRight">
                  <Card.Header>Example Job Name</Card.Header>
                  <Card.Body className="m-3">
                    Net Gain from taking this position: $120000 <br />
                    New Salary: $275000<br />
                    New Job Location: 2901 3rd Ave #300, Seattle, WA 98121<br />
                    You can save: $5000 Annually in gas costs<br />
                  </Card.Body>
                </Card>

                <div className="bottomSpace ">Wow</div>
              </aside>
          }
        </Container >
      )
    }
  }
}

export default withAuth0(Landing);
