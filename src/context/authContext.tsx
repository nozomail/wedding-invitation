import React, { createContext, useState, ReactNode } from 'react';

export type authContextProps =
  | {
      user: string | null;
      login: () => void;
      logout: () => void;
    }
  | undefined;

type AuthContextProviderProps = {
  children: ReactNode;
};

export const authContext = createContext<authContextProps>(undefined);

export function AuthContextProvider({ children }: AuthContextProviderProps): JSX.Element {
  const [user, setUser] = useState<string | null>(null);

  const login = () => {
    setUser('user');
  };

  const logout = () => {
    setUser(null);
  };

  const auth = {
    user,
    login,
    logout,
  };

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
