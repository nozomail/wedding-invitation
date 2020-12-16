import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { HelperText } from '@components/HelperText';
import { UserProps } from '@propTypes/user';

type Props = {
  user: UserProps;
};

export function InvitationCard({ user }: Props): JSX.Element {
  const guests = user.recipients.map((recipient) => recipient.firstName);
  if (user.hasKids) {
    guests.push('family');
  }
  const guestNames = guests.map((guest, index) => {
    switch (index) {
      case 0:
        return <span key={index}>{guest}</span>;
      case guests.length - 1:
        return (
          <span key={index}>
            <span className="-and">&</span>
            <span>{guest}</span>
          </span>
        );
      default:
        return (
          <span key={index}>
            <span className="-comma">, </span>
            <span>{guest}</span>
          </span>
        );
    }
  });

  return (
    <div className="InvitationCard">
      <div className="InvitationCard_host">
        <div>Nozomi Hirai</div>
        <div className="-and">&</div>
        <div>Matthew Mail</div>
      </div>
      <div>ARE DELIGHTED TO INVITE</div>
      <div className="InvitationCard_guest">
        <div>{guestNames}</div>
      </div>
      <div>
        <span>TO SHARE IN THE CELEBRATION</span> <span>OF THEIR MARRIAGE</span>
      </div>
      <div className="InvitationCard_julius -date">WEDNESDAY, 1 JANUARY 2020</div>
      <div>4 O'CLOCK IN THE AFTERNOON</div>
      <div>
        <span className="InvitationCard_julius -venue">MUDBRICK VINEYARD</span>{' '}
        <span className="InvitationCard_julius">& RESTAURANT</span>
      </div>
      <div>126 CHURCH BAY ROAD, ONEROA</div>
      <div>WAIHEKE ISLAND, NEW ZEALAND</div>
      <div className="InvitationCard_reception">Followed by a reception</div>
      <div className="InvitationCard_rsvp">PLEASE RSVP BY NOVEMBER 15TH</div>
      <HelperText>
        PLEASE CHECK{' '}
        <Link to="/venue" className="InvitationCard_link">
          VENUE INFO &amp; MAP
        </Link>{' '}
        BEFORE COMPLETING YOUR RSVP
      </HelperText>
      <HelperText>EARLY RESERVATIONS ARE APPRECIATED</HelperText>
    </div>
  );
}
