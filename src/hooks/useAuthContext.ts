import { useContext } from 'react';

import { authContext, authContextProps } from '@context/authContext';

export function useAuthContext(): authContextProps {
  return useContext(authContext);
}
