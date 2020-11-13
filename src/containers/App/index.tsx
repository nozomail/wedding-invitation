import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style.scss';

import { Nav } from '@components/Nav';
import { Venue } from '@containers/Venue';
import { Timeline } from '@containers/Timeline';

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
      path: 'contribution',
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
            <Route exact path="/venue" component={Venue} />
            <Route exact path="/timeline" component={Timeline} />
          </Switch>
        </div>
        <div className="App_nav">
          <Nav navItems={navItems}></Nav>
        </div>
      </div>
    </BrowserRouter>
  );
}
