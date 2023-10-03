import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Addition from './apps/Addition'
import Calcule1 from './apps/Calcule1'
import Calcule2 from './apps/Calcule2'
import Calcule3 from './apps/Calcule3'
import AppGetJsonServer from './frontendNode/AppGetJsonServer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppGetJsonServer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
