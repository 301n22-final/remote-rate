import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
</style>

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


