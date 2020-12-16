import React, { useEffect, useRef } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './style.scss';

import { Nav } from '@components/Nav';
import { PrivateRoute } from '@containers/PrivateRoute';
import { Login } from '@containers/Login';
import { Envelope } from '@containers/Envelope';
import { Invitation } from '@containers/Invitation';
import { Venue } from '@containers/Venue';
import { Rsvp } from '@containers/Rsvp';
import { Timeline } from '@containers/Timeline';
import { Honeymoon } from '@containers/Honeymoon';

import { useUserContext } from '@hooks/useUserContext';

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
    path: '/',
  },
];

export function App(): JSX.Element {
  const location = useLocation();
  const appRef = useRef<HTMLDivElement | null>(null);
  const { user } = useUserContext();

  useEffect(() => {
    appRef.current.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App" ref={appRef}>
      <div className="App_main">
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Envelope} />
          <PrivateRoute exact path="/invitation" component={Invitation} />
          <PrivateRoute exact path="/venue" component={Venue} />
          <PrivateRoute exact path="/rsvp" component={Rsvp} />
          <PrivateRoute exact path="/timeline" component={Timeline} />
          <PrivateRoute exact path="/honeymoon" component={Honeymoon} />
        </Switch>
      </div>
      {user && location.pathname !== '/login' && location.pathname !== '/' && (
        <div className="App_nav">
          <Nav navItems={navItems}></Nav>
        </div>
      )}
    </div>
  );
}
