import { useContext } from 'react';

import { context, ContextProps } from '@context/userContext';

export function useUserContext(): ContextProps {
  return useContext(context);
}
