import React, { useEffect, useRef } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './style.scss';

import { Loader } from '@components/loader';
import { Nav } from '@components/Nav';
import { PrivateRoute } from '@containers/PrivateRoute';
import { Login } from '@containers/Login';
import { Envelope } from '@containers/Envelope';
import { Invitation } from '@containers/Invitation';
import { Venue } from '@containers/Venue';
import { Rsvp } from '@containers/Rsvp';
import { Timeline } from '@containers/Timeline';
import { Honeymoon } from '@containers/Honeymoon';
import { NotFound } from '@containers/NotFound';

import { useUserContext } from '@hooks/useUserContext';
import { NAV_ITEMS } from '@constants/nav';

export function App(): JSX.Element {
  const location = useLocation();
  const appRef = useRef<HTMLDivElement | null>(null);
  const { user, isLoading } = useUserContext();

  useEffect(() => {
    appRef.current.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App" ref={appRef}>
      <CSSTransition in={isLoading} timeout={750} classNames="loader">
        <Loader />
      </CSSTransition>
      <div className="App_main">
        <TransitionGroup>
          <CSSTransition timeout={750} classNames="page" key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Envelope} />
              <PrivateRoute exact path="/invitation" component={Invitation} />
              <PrivateRoute exact path="/venue" component={Venue} />
              <PrivateRoute exact path="/rsvp" component={Rsvp} />
              <PrivateRoute exact path="/timeline" component={Timeline} />
              <PrivateRoute exact path="/honeymoon" component={Honeymoon} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
      {user && location.pathname !== '/login' && location.pathname !== '/' && (
        <div className="App_nav">
          <Nav navItems={NAV_ITEMS}></Nav>
        </div>
      )}
    </div>
  );
}
