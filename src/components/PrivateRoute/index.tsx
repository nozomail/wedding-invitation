import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuthContext } from '@hooks/useAuthContext';

type Props = {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
};

export function PrivateRoute({ component: Component, ...rest }: Props): JSX.Element {
  const auth = useAuthContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    ></Route>
  );
}