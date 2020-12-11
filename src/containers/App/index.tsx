import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './style.scss';

import { Nav } from '@components/Nav';
import { Login } from '@containers/Login';
import { Envelope } from '@containers/Envelope';
import { Invitation } from '@containers/Invitation';
import { Venue } from '@containers/Venue';
import { Timeline } from '@containers/Timeline';
import { Honeymoon } from '@containers/Honeymoon';

export function App(): JSX.Element {
  const location = useLocation();
  console.log(location.pathname);
  const navItems = [
    {
      name: 'ENVELOPE',
      path: 'envelope',
    },
    {
      name: 'INVITAION',
      path: 'invitation',
    },
    {
      name: 'VENUE',
      path: 'venue',
    },
    {
      name: 'RSVP',
      path: 'rsvp',
    },
    {
      name: 'WEDDING DAY TIMELINE',
      path: 'timeline',
    },
    {
      name: 'HONEYMOON CONTRIBUTION',
      path: 'honeymoon',
    },
  ];

  return (
    <div className="App">
      <div className="App_main">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Venue} />
          <Route exact path="/envelope" component={Envelope} />
          <Route exact path="/invitation" component={Invitation} />
          <Route exact path="/venue" component={Venue} />
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/honeymoon" component={Honeymoon} />
        </Switch>
      </div>
      {location.pathname !== '/envelope' && (
        <div className="App_nav">
          <Nav navItems={navItems}></Nav>
        </div>
      )}
    </div>
  );
}
