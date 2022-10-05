import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// npm i react-router-dom
import { BrowserRouter } from "react-router-dom";
import AppRouter from './router/AppRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter >
    <AppRouter />
  </BrowserRouter>
  </React.StrictMode>
);

