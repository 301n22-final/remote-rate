import React from 'react';
import './css/App.css';
import Footer from './components/Footer.js';
import Profile from './components/Profile.js';
import Compare from './components/Compare.js';
import About from './components/AboutUs.js';
import Landing from './components/Landing.js';
import Container from 'react-bootstrap/Container';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Alert from 'react-bootstrap/Alert'

class App extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <Container>
        <Router>
          <Navbar isAuthenticated={isAuthenticated} />
          <Switch>
            <Route exact path="/">
              {
                isAuthenticated ?
                  <>
                    <Landing />
                  </> :
                  <>
                    <Landing />
                  </>
              }
            </Route>
            <Route exact path="/landing">
              {
                isAuthenticated ?
                  <>
                    <Landing />
                  </> :
                  <>
                    <Landing />
                  </>
              }
            </Route>
            <Route exact path="/profile">
              {
                isAuthenticated ?
                  <>
                    <Profile email={user.email} name={user.name} />
                  </> :
                  <>
                    <Alert variant="danger">
                      <Alert.Heading>Oh snap! You are not logged in!!</Alert.Heading>
                      <p>
                        Please Log in to access the contents of this page and start saving money!
                      </p>
                    </Alert>
                    <Landing />
                  </>
              }
            </Route>
            <Route exact path="/compare">
              {
                isAuthenticated ?
                  <>
                    <Compare email={user.email} />
                  </> :
                  <>
                    <Alert variant="danger">
                      <Alert.Heading>Oh snap! You are not logged in!!</Alert.Heading>
                      <p>
                        Please Log in to access the contents of this page and start saving money!
                      </p>
                    </Alert>
                    <Landing />
                  </>
              }
            </Route>
            <Route exact path="/aboutUs">
              {
                isAuthenticated ?
                  <>
                    <About />
                  </> :
                  <>
                    <About />
                  </>
              }
            </Route>
          </Switch>
          <Footer />
        </Router>
      </Container>
    )
  }
}

export default withAuth0(App);
