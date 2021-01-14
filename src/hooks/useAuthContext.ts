import { useContext } from 'react';

import { context, ContextProps } from '@context/authContext';

export function useAuthContext(): ContextProps {
  return useContext(context);
}
