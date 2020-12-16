import React from 'react';
import './style.scss';

import { LABEL, RSVP_ITEMS } from '@constants/rsvp';
import { RsvpProps } from '@propTypes/user';

type props = {
  rsvp: RsvpProps;
};

export function RsvpReview({ rsvp }: props): JSX.Element {
  function formatData(data: any) {
    switch (data) {
      case 'unknown':
        return 'NOT SURE YET';
      case true:
        return 'YES';
      case false:
        return 'NO';
      default:
        return data.toUpperCase();
    }
  }

  return (
    <div className="RsvpReview">
      <div className="RsvpReview_answer">{rsvp.rsvp ? LABEL.rsvpYes : LABEL.rsvpNo}</div>
      <div className="RsvpReview_thanks">Thank you!</div>
      {rsvp.rsvp ? (
        <div className="RsvpReview_body">
          <dl className="RsvpReview_item">
            <dt>GUEST(S)</dt>
            {rsvp.guests.map((guest, index) => {
              return (
                <dd key={index}>
                  {formatData(`${guest.title}. ${guest.firstName} ${guest.lastName}`)}
                  {guest.kidsMenu && ' (KIDS MENU) '}
                  {guest.diet !== '' && ` (${formatData(guest.diet)}) `}
                </dd>
              );
            })}
          </dl>
          {RSVP_ITEMS.map((item, index) => {
            if (rsvp[item] !== undefined) {
              return (
                <dl className="RsvpReview_item" key={index}>
                  <dt>{LABEL[item]}</dt>
                  <dd>{formatData(rsvp[item])}</dd>
                </dl>
              );
            }
          })}
        </div>
      ) : (
        <div>
          <dl className="RsvpReview_item">
            <dt>MESSAGE</dt>
            <dd>{formatData(rsvp.message)}</dd>
          </dl>
        </div>
      )}
      <div>
        <div></div>
      </div>
    </div>
  );
}
