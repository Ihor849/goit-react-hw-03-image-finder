import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHook from 'components/App/AppHook';
import { GlobalStyle } from './style/GlobalStyle';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppHook />
    <GlobalStyle />
  </React.StrictMode>
);
