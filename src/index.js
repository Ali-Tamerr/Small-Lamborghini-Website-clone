import React from 'react';
import ReactDOM from 'react-dom/client';
import './App';
import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>
), document.getElementById('root'));
  