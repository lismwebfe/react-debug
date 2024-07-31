// @flow
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// window.addEventListener('error', (event) => {
//   console.error("全局错误捕获:", event.error);
// });
//
// window.addEventListener('unhandledrejection', (event) => {
//   console.error("未处理的Promise拒绝:", event.reason);
// });

const root = ReactDOM.createRoot(document.getElementById('root'),{
  onCaughtError(err,errorInfo) {
    console.error('onCaughtError',err,errorInfo)
  },
  onUncaughtError(err,errorInfo) {
    console.error('onUncaughtError',err,errorInfo)
  },
  onRecoverableError(err,errorInfo) {
    console.error('onRecoverableError',err,errorInfo)
  },
  unstable_strictMode: true,
});
console.log(React.version)
// ReactDOMRoot.prototype.render
// src/react/packages/react-dom/src/client/ReactDOMRoot.js:101
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
