import React from 'react';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton.js';
import '../css/login.css';
class Login extends React.Component {
  render() {
    
    return(
      <Card className = 'login' style={{ width: '18rem' }}>
        <Card.Body >
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>

          <LoginButton />

        </Card.Body>
      </Card>
    )
  }
}

export default Login;
