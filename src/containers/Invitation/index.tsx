import React from 'react';

import { InvitationCard } from '@components/InvitationCard';
import { useUserContext } from '@hooks/useUserContext';

export function Invitation(): JSX.Element {
  const { user } = useUserContext();

  return (
    <div className="Invitation">
      <InvitationCard user={user}></InvitationCard>
    </div>
  );
}
