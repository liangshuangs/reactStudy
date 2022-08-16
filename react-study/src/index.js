/*
 * @Anthor: liangshuang15
 * @Description: 
 * @Date: 2022-08-16 11:45:55
 * @LastEditTime: 2022-08-16 14:20:50
 * @FilePath: /ls/react-study/src/index.js
 */
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
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
