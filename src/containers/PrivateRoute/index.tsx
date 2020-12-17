import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useUserContext } from '@hooks/useUserContext';

type Props = {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
};

export function PrivateRoute({ component: Component, ...rest }: Props): JSX.Element {
  const { isLoading, user } = useUserContext();

  if (isLoading) {
    return <></>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
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
