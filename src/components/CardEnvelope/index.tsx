import React from 'react';
import './style.scss';

type Props = {
  guests: {
    firstName: string;
    lastName: string;
    title: string;
  }[];
  cardState: string;
};

export function CardEnvelope({ guests, cardState }: Props): JSX.Element {
  const guest1 = guests[0];
  const guest2 = guests[1];
  let name = '';

  if (guests.length > 1) {
    if (guest1.lastName === guest2.lastName) {
      if (guest1.title !== 'Dr' && guest2.title === 'Dr') {
        name = `Dr. ${guest2.firstName} &<br>${guest1.title}. ${guest1.firstName} ${guest1.lastName}`;
      } else if (guest1.title === 'Dr' && guest2.title === 'Dr') {
        name = `Doctors  ${guest1.firstName} &<br>${guest2.firstName} ${guest2.lastName}`;
      } else {
        name = `${guest1.title}. ${guest1.firstName} &<br>${guest2.title}. ${guest2.firstName} ${guest1.lastName}`;
      }
    } else {
      if (guest1.title !== 'Dr' && guest2.title === 'Dr') {
        name = `Dr. ${guest2.firstName} ${guest2.lastName}<br>& ${guest1.title}. ${guest1.firstName} ${guest1.lastName}`;
      } else {
        name = `${guest1.title}. ${guest1.firstName} ${guest1.lastName}<br>& ${guest2.title}. ${guest2.firstName} ${guest2.lastName}`;
      }
    }
  } else {
    name = `${guest1.title}. ${guest1.firstName} ${guest1.lastName}`;
  }

  return (
    <div className={`CardEnvelope ${cardState}`}>
      <div className="CardEnvelope_inside"></div>
      <div className="CardEnvelope_card">
        <div className="CardEnvelope_host">
          <span>Nozomi Hirai</span>
          <span className="-and">&</span>
          <span>Matthew Mail</span>
        </div>
        <div>ARE DELIGHTED TO INVITE</div>
      </div>
      <div className="CardEnvelope_back"></div>
      <div className="CardEnvelope_lid">
        <div className="CardEnvelope_lidFront"></div>
        <div className="CardEnvelope_lidBack"></div>
      </div>
      <div className="CardEnvelope_front">
        <span className="CardEnvelope_guest" dangerouslySetInnerHTML={{ __html: name }}></span>
      </div>
    </div>
  );
}
