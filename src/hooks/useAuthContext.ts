import { useContext } from 'react';

import { context, contextProps } from '@context/authContext';

export function useAuthContext(): contextProps {
  return useContext(context);
}
