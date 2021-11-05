import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>Welcome To The World of Mobile Dentistry 2021</h2>
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

// export default App;
export default withAuthenticator(App);
