import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
// import BookCard from './components/BookCard';

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
            {/* <Route path="/books" element={<BookCard />} /> */}
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
