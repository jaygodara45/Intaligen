import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './components/ContextProvider/Context';
import { BrowserRouter } from "react-router-dom"
import { LoginProvider } from './components/ContextProvider/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>

);

