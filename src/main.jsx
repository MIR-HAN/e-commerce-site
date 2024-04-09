import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { ProductProvider } from './context/productContext.jsx';
import { BasketProvider } from './context/basketContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </BasketProvider>
    <ToastContainer  autoClose={1000}/>
  </React.StrictMode>,
)
