import React from 'react';

import { InvitationCard } from '@components/InvitationCard';

const guests = ['John', 'Kate', 'family'];

export function Invitation(): JSX.Element {
  return (
    <div className="Invitation">
      <InvitationCard guests={guests}></InvitationCard>
    </div>
  );
}
