import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { HelperText } from '@components/HelperText';

type Props = {
  guests: string[];
};

export function InvitationCard({ guests }: Props): JSX.Element {
  const guestNames = guests.map((guest, index) => {
    switch (index) {
      case 0:
        return <span key={index}>{guest}</span>;
      case guests.length - 1:
        return (
          <div key={index}>
            <span className="-and">&</span>
            <span>{guest}</span>
          </div>
        );
      default:
        return <span key={index}>, {guest}</span>;
    }
  });

  return (
    <div className="InvitationCard">
      <div className="InvitationCard_host">
        <span>Nozomi Hirai</span>
        <span className="-and">&</span>
        <span>Matthew Mail</span>
      </div>
      <span>ARE DELIGHTED TO INVITE</span>
      <div className="InvitationCard_guest">{guestNames}</div>
      <span>TO SHARE IN THE CELEBRATION</span>
      <span>OF THEIR MARRIAGE</span>
      <span className="InvitationCard_julius -date">WEDNESDAY, 1 JANUARY 2020</span>
      <span>4 O'CLOCK IN THE AFTERNOON</span>
      <span className="InvitationCard_julius -venue">MUDBRICK VINEYARD</span>
      <span className="InvitationCard_julius">& RESTAURANT</span>
      <span>126 CHURCH BAY ROAD, ONEROA</span>
      <span>WAIHEKE ISLAND, NEW ZEALAND</span>
      <span className="InvitationCard_reception">Followed by a reception</span>
      <span className="InvitationCard_rsvp">PLEASE RSVP BY NOVEMBER 15TH</span>
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
