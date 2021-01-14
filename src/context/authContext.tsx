import React, { createContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '@services/firebase';

export type ContextProps =
  | {
      login: (
        email: string,
        password: String,
        setError: React.Dispatch<React.SetStateAction<String>>,
        setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
      ) => void;
      logout: () => void;
    }
  | undefined;

type ContextProviderProps = {
  children: React.ReactNode;
};

export const context = createContext<ContextProps>(undefined);

export function AuthContextProvider({ children }: ContextProviderProps): JSX.Element {
  const history = useHistory();

  const login = (
    email: string,
    password: string,
    setError: React.Dispatch<React.SetStateAction<String>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setIsLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
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
