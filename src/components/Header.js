import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton.js';
import Login from './Login.js';
import { Container, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Container>
        {
          isAuthenticated ?
            <>
              <Row>
                <Col>
                  <LogoutButton />
                </Col>
              </Row>
            </> :
            <>
              <Login />
            </>
        }
      </Container>
    );
  }
}
export default withAuth0(Header);
