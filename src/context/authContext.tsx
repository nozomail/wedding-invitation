import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, database } from '@services/firebase';

export type contextProps =
  | {
      isChecking: boolean;
      user: userProps | null;
      login: (
        email: string,
        password: String,
        setError: React.Dispatch<React.SetStateAction<String>>,
      ) => void;
      logout: () => void;
    }
  | undefined;

type userProps = {
  recipients: {
    firstName: string;
    lastName: string;
    title: string;
  }[];
  haveKids: boolean;
} | null;

type contextProviderProps = {
  children: React.ReactNode;
};

export const context = createContext<contextProps>(undefined);

export function AuthContextProvider({ children }: contextProviderProps): JSX.Element {
  const [isChecking, setIsChecking] = useState(true);
  const [user, setUser] = useState<userProps | null>(null);
  const history = useHistory();

  const login = (
    email: string,
    password: string,
    setError: React.Dispatch<React.SetStateAction<String>>,
  ) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push('/'))
      .catch((error) => {
        setError(error.message);
      });
  };

  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
      history.push('/login');
    });
  };

  const value = {
    isChecking,
    user,
    login,
    logout,
  };

  useEffect(() => {
    auth.onAuthStateChanged((data) => {
      if (data) {
        database
          .collection('users')
          .doc(data.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setUser(doc.data() as userProps);
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
            setIsChecking(false);
          });
      } else {
        logout();
      }
    });
  }, []);

  return <context.Provider value={value}>{children}</context.Provider>;
}
