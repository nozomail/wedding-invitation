import React from 'react';

import { Container } from '@components/Container';
import { InvitationCard } from '@components/InvitationCard';
import { useUserContext } from '@hooks/useUserContext';

export function Invitation(): JSX.Element {
  const { user } = useUserContext();

  return (
    <Container className="Invitation">
      <InvitationCard user={user}></InvitationCard>
    </Container>
  );
}
