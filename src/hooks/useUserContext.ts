import { useContext } from 'react';

import { context, contextProps } from '@context/userContext';

export function useUserContext(): contextProps {
  return useContext(context);
}
