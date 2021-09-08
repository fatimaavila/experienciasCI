import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './context/UserContext';
import App from './App';
import ErrorBoundary from './components/errorBoundaries/ErrorBoundaries';
import { FilterProvider } from './context/FilterContext';

ReactDOM.render(
  <ErrorBoundary>
    <UserProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </UserProvider>
  </ErrorBoundary>,
  document.getElementById('root')
);
