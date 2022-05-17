import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAIa5Tc5LjSGLa6LwldX9f8bYdc6uHRIgw",
  authDomain: "coder-tienda-react.firebaseapp.com",
  projectId: "coder-tienda-react",
  storageBucket: "coder-tienda-react.appspot.com",
  messagingSenderId: "118301870276",
  appId: "1:118301870276:web:93021c3164e1bf30bfe191"
};

const app = initializeApp(firebaseConfig);

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
