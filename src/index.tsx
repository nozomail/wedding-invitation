import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './containers/App';

import { AuthContextProvider } from '@context/authContext';
import { UserContextProvider } from '@context/userContext';

render(
  <BrowserRouter>
    <AuthContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
