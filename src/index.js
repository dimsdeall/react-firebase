import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDS88_6aEWCWAxvCja3vYVUk_wesNZRxgA",
  authDomain: "react-41bca.firebaseapp.com",
  databaseURL: "https://react-41bca-default-rtdb.firebaseio.com/",
  projectId: "react-41bca",
  storageBucket: "react-41bca.appspot.com",
  messagingSenderId: "238728144344",
  appId: "1:238728144344:web:e933623796a0ab2ff7fead"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
