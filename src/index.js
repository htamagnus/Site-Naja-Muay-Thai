import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ButtonWhats from './Components/ButtonWhats/ButtonWhats';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ButtonWhats />
    <App />
  </React.StrictMode>
);
