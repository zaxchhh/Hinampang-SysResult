import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // This MUST be the App.tsx inside apps/user/src

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);