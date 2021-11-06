import React from 'react';
import logo from './logo.svg';
import './LeadsHome.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Auth } from "aws-amplify";

import LeadsApp from "./LeadsApp";
import OwnersApp from "./OwnesrApp";
import ReportsApp from './MobileDentalReportsApp';



function OwnersApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>Welcome To Owners Home Page</h2>
        </p>
       
        <a
          className="App-link"
          href="https://www.teledentalsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        
      </header>

      <AmplifySignOut />
    </div>
  );
}



export default OwnersApp;