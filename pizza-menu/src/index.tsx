import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function Pizza() {
  return (
    <body>
      <img src="pizzas\spinaci.jpg" alt=""  />
      <h2>Pizza Spinnaci</h2>
      <p>Tomato, mozarella, and pepperoni</p>
    </body>
  );
}

root.render(
  <React.StrictMode>
    
    <Pizza/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
