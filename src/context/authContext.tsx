import React, { createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '@services/firebase';

export type contextProps =
  | {
      login: (
        email: string,
        password: String,
        setError: React.Dispatch<React.SetStateAction<String>>,
      ) => void;
      logout: () => void;
    }
  | undefined;

type contextProviderProps = {
  children: React.ReactNode;
};

export const context = createContext<contextProps>(undefined);

export function AuthContextProvider({ children }: contextProviderProps): JSX.Element {
  const history = useHistory();

  const login = (
    email: string,
    password: string,
    setError: React.Dispatch<React.SetStateAction<String>>,
  ) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logout = () => {
    auth.signOut().then(() => {
      history.push('/login');
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((data) => {
      if (!data) {
        history.push('/login');
      }
    });
  }, []);

  const value = {
    login,
    logout,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
}
