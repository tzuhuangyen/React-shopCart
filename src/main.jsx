import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './index.c ss'
import 'bootstrap/scss/bootstrap.scss';
import { BrowserRouter } from 'react-router-dom'; // 导入 HashRouter
import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/React-shopCart'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
