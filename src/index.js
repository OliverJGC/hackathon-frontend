import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//Fonts
import './utils/fonts/Quicksand/Quicksand-Regular.ttf';
import './utils/fonts/Quicksand/Quicksand-Medium.ttf';
import './utils/fonts/Quicksand/Quicksand-SemiBold.ttf';
import './utils/fonts/Quicksand/Quicksand-Bold.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
