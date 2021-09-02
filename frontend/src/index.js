import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './context/UserContext';
import App from './App';
import ErrorBoundary from './components/errorBoundaries/ErrorBoundaries';

ReactDOM.render(
  <ErrorBoundary>
    <UserProvider>
      <App />
    </UserProvider>
  </ErrorBoundary>,
  document.getElementById('root')
);
