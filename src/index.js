import React from 'react';
import ReactDOM from 'react-dom/client';
// Agregamos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css';
//! IMPORTANTE: los estilos propios, deben ir debajo del bootstrap para que no los pise
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
