import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Kylian',
  lastName: 'Mbappé'
};

/*const element = (
  <h1>
    Bonjour, {formatName(user)} !  
  </h1>
);*/

const element = <a href="https://www.reactjs.org"> link </a>;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
