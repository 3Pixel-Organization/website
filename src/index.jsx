import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { App } from 'App';

import 'normalize.css';
import 'index.css';
import { State } from 'state/State';

ReactDOM.render(
  <React.StrictMode>
    <State>
      <HashRouter>
        <App />
      </HashRouter>
    </State>
  </React.StrictMode>,
  document.getElementById('root'),
);
