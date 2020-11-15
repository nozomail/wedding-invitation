import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style.scss';

import { Nav } from '@components/Nav';
import { Invitation } from '@containers/Invitation';
import { Venue } from '@containers/Venue';
import { Timeline } from '@containers/Timeline';
import { Honeymoon } from '@containers/Honeymoon';

export function App(): JSX.Element {
  const navItems = [
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
    {
      name: 'ENVELOPE',
      path: 'envelope',
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <div className="App_main">
          <Switch>
            <Route exact path="/" component={Venue} />
            <Route exact path="/invitation" component={Invitation} />
            <Route exact path="/venue" component={Venue} />
            <Route exact path="/timeline" component={Timeline} />
            <Route exact path="/honeymoon" component={Honeymoon} />
          </Switch>
        </div>
        <div className="App_nav">
          <Nav navItems={navItems}></Nav>
        </div>
      </div>
    </BrowserRouter>
  );
}
