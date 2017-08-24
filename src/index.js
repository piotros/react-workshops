import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {render} from 'react-dom';

setInterval(() => {
  render(<h1>Date: {Date()}</h1>, document.getElementById('root'))
}, 1000);

setInterval(() => {
  render(<h1>Date: {Date()}</h1>, document.getElementById('root2'))
}, 2000);


// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
