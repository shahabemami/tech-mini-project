import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

// config file
import config from "./config";

// moudles
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
