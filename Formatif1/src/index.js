import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Additionne from './Additionne';
import Calculatrice from './Calculatrice';
import Calcule1  from './Calcule1';
import Calcule2  from './Calcule2';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

//pour addition
/*root.render(
  <Additionne />
);*/

//pour Calculatrice
/*root.render(
  <Calculatrice />
)*/

//pour Calcule1
/*root.render(
  <React.StrictMode>
    <Calcule1 />
  </React.StrictMode>
)*/

//pour Calcule2
root.render(
  <React.StrictMode>
    <Calcule2 />
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
