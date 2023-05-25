
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import {store} from  "./store"
import { LangProvider } from './components/Context/contextLang';
import { TokenProvider } from './components/Context/contextToken';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <LangProvider>
  <TokenProvider>
    <App />
  </TokenProvider>
  </LangProvider>
  </Provider>
  </BrowserRouter>
  </React.StrictMode>
);

