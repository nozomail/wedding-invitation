import React from 'react';

import { Card } from '@components/Card';
import { TimelineItem } from '@components/TimelineItem';

const timelineItems = [
  {
    time: '3.00 PM',
    items: [
      {
        name: 'Fullers ferry from Auckland to Waiheke',
        icon: 'ferry',
      },
    ],
  },
  {
    time: '3.50 PM',
    items: [
      {
        name: 'Bus from Matiatia Wharf to Mudbrick',
        icon: 'bus',
        helper:
          'Bus departure time depends on the arrival time of the 3.00 pm ferry from Auckland.',
      },
    ],
  },
  {
    time: '4.00 PM',
    items: [
      {
        name: 'Wedding Ceremony',
        icon: 'ring',
      },
    ],
  },
  {
    time: '5.00 PM',
    items: [
      {
        name: 'Canapes',
        icon: 'cocktail',
      },
      {
        name: 'Bridal party and family photos',
        icon: 'camera',
      },
    ],
  },
  {
    time: '6.30 PM',
    items: [
      {
        name: 'Dinner',
        icon: 'dinner',
      },
    ],
  },
  {
    time: '9.30 PM',
    items: [
      {
        name: 'Dance and Music',
        icon: 'party',
      },
    ],
  },
  {
    time: '10.30 PM',
    items: [
      {
        name: 'Bus for last ferry to Auckland',
        icon: 'bus',
      },
    ],
  },
  {
    time: '1.00 AM',
    items: [
      {
        name: 'Bus to accommodation on Waiheke Island',
        icon: 'bus',
      },
    ],
  },
];

export function Timeline(): JSX.Element {
  return (
    <div className="Timeline">
      <Card title="Wedding Day Timeline">
        {timelineItems.map((time, index) => (
          <TimelineItem time={time.time} items={time.items} key={index} />
        ))}
      </Card>
    </div>
  );
}
