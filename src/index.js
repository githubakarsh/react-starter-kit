import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import './main.scss';

import getAppContent from './utils/contentFetcher';

const root = document.getElementById('root');

const renderer = (comp) => {
  return ReactDOM.render(
    comp,
    root
  );
}

(async () => {
  try {
    const appContent = await getAppContent();
    renderer(<StrictMode><Router><App content={appContent}/></Router></StrictMode>);
  }catch (err) {
    console.log(err)
    renderer(<div>There is some problem</div>);
  }
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
