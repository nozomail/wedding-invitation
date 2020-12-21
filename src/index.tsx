import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './containers/App';

import { AuthContextProvider } from '@context/authContext';
import { UserContextProvider } from '@context/userContext';

render(
  <HashRouter>
    <AuthContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AuthContextProvider>
  </HashRouter>,
  document.getElementById('root'),
);
