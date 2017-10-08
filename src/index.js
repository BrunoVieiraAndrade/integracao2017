import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

var injectTapEventPlugin = require("react-tap-event-plugin"); //eslint-disable import/first
injectTapEventPlugin();

ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
