import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

// config file
import config from "./aws-exports";

// moudles
import { Amplify } from "aws-amplify";


ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
