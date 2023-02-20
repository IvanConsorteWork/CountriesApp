import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';

// const API_URL = process.env.REACT_APP_API;

axios.defaults.baseURL = "https://countriesapp-production-903b.up.railway.app" || "http://localhost:3001"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <BrowserRouter>
          <App />
       </BrowserRouter>
    </Provider>
</React.StrictMode>
);


