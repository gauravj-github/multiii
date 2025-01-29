import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { UserContext } from './congtext/context';


const checkUserlogin = localStorage.getItem('customerlogin',true)
ReactDOM.render(
  <Router>
    <UserContext.Provider value={checkUserlogin}>
    <App />
    </UserContext.Provider>
  </Router>,
  document.getElementById('root')
);

