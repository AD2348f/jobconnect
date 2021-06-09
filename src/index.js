import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from './AuthContext';
import { BrowserRouter  } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Router>
          <App />
        </Router>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,



  document.getElementById('root')
);

