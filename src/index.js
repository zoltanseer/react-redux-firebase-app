import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router
} from 'react-router-dom'

import * as firebase from 'firebase';

import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: "AIzaSyCs9Dy-tADctnJBiXsbskXhiOXIG8u6VDk",
  authDomain: "test-fadf6.firebaseapp.com",
  databaseURL: "https://test-fadf6.firebaseio.com",
  projectId: "test-fadf6",
  storageBucket: "",
  messagingSenderId: "21176714838"
};

firebase.initializeApp(config);

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
