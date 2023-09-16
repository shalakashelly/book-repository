import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<App />} />
            <Route path="/dashboard" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
  </Provider>
);
