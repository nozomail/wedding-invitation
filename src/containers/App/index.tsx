import React, { useEffect, useRef } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './style.scss';

import { Nav } from '@components/Nav';
import { PrivateRoute } from '@components/PrivateRoute';
import { Login } from '@containers/Login';
import { Envelope } from '@containers/Envelope';
import { Invitation } from '@containers/Invitation';
import { Venue } from '@containers/Venue';
import { Rsvp } from '@containers/Rsvp';
import { Timeline } from '@containers/Timeline';
import { Honeymoon } from '@containers/Honeymoon';

import { AuthContextProvider } from '@context/authContext';

const navItems = [
  {
    name: 'INVITAION',
    path: '/invitation',
  },
  {
    name: 'VENUE',
    path: '/venue',
  },
  {
    name: 'RSVP',
    path: '/rsvp',
  },
  {
    name: 'WEDDING DAY TIMELINE',
    path: '/timeline',
  },
  {
    name: 'HONEYMOON CONTRIBUTION',
    path: '/honeymoon',
  },
  {
    name: 'ENVELOPE',
    path: '/envelope',
  },
];

export function App(): JSX.Element {
  const location = useLocation();
  const appRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    appRef.current.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AuthContextProvider>
      <div className="App" ref={appRef}>
        <div className="App_main">
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/envelope" component={Envelope} />
            <PrivateRoute exact path="/invitation" component={Invitation} />
            <PrivateRoute exact path="/venue" component={Venue} />
            <PrivateRoute exact path="/rsvp" component={Rsvp} />
            <PrivateRoute exact path="/timeline" component={Timeline} />
            <PrivateRoute exact path="/honeymoon" component={Honeymoon} />
          </Switch>
        </div>
        {location.pathname !== '/login' && location.pathname !== '/envelope' && (
          <div className="App_nav">
            <Nav navItems={navItems}></Nav>
          </div>
        )}
      </div>
    </AuthContextProvider>
  );
}
