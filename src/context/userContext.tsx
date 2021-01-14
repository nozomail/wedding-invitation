import React, { createContext, useState, useEffect, SetStateAction } from 'react';

import { auth, database } from '@services/firebase';
import { UserProps, RsvpProps } from '@propTypes/user';

export type ContextProps = {
  isLoading: boolean;
  user: UserProps;
  submitRsvp: (rsvp: RsvpProps, setIsEditting: React.Dispatch<SetStateAction<boolean>>) => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type ContextProviderProps = {
  children: React.ReactNode;
};

export const context = createContext<ContextProps>(undefined);

export function UserContextProvider({ children }: ContextProviderProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [uid, setUid] = useState<string | null>(null);
  const [user, setUser] = useState<UserProps | null>(null);

  const submitRsvp = (rsvp: RsvpProps, setIsEditting: React.Dispatch<SetStateAction<boolean>>) => {
    if (uid) {
      database
        .collection('users')
        .doc(uid)
        .update({ rsvp })
        .then(() => {
          setIsEditting(false);
        });
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((data) => {
      if (data) {
        setUid(data.uid);
        database
          .collection('users')
          .doc(data.uid)
          .onSnapshot((doc) => {
            setUser(doc.data() as UserProps);

            setIsLoading(false);
          });
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const value = {
    isLoading,
    setIsLoading,
    user,
    submitRsvp,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
}
