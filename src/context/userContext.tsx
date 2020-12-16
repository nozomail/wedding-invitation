import React, { createContext, useState, useEffect } from 'react';

import { auth, database } from '@services/firebase';
import { UserProps, RsvpProps } from '@propTypes/user';

export type contextProps = {
  isLoading: boolean;
  user: UserProps;
  submitRsvp: (rsvp: RsvpProps) => void;
};

type ContextProviderProps = {
  children: React.ReactNode;
};

export const context = createContext<contextProps>(undefined);

export function UserContextProvider({ children }: ContextProviderProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [uid, setUid] = useState<string | null>(null);
  const [user, setUser] = useState<UserProps | null>(null);

  const submitRsvp = (rsvp: RsvpProps) => {
    if (uid) {
      database.collection('users').doc(uid).update({ rsvp });
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((data) => {
      if (data) {
        setUid(data.uid);
        database
          .collection('users')
          .doc(data.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setUser(doc.data() as UserProps);
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    });
  }, []);

  const value = {
    isLoading,
    user,
    submitRsvp,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
}
