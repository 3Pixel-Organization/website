import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { App } from 'App';

import 'normalize.css';
import 'index.css';
import { State } from 'state/State';

const reactQueryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <State>
      <QueryClientProvider client={reactQueryClient}>
        <HashRouter>
          <App />
        </HashRouter>
      </QueryClientProvider>
    </State>
  </React.StrictMode>,
  document.getElementById('root'),
);
