import React from 'react';
import './style.scss';

import { HelperText } from '@components/HelperText';

type Props = {
  time: string;
  items: {
    name: string;
    icon: string;
    helper?: string;
  }[];
};

export function TimelineItem({ time, items }: Props): JSX.Element {
  return (
    <div className="TimelineItem">
      <div className="TimelineItem_head">{time}</div>
      <div className="TimelineItem_body">
        {items.map((item, index) => (
          <div key={index}>
            <div className={`TimelineItem_item -${item.icon}`}>{item.name}</div>
            {item.helper && <HelperText>{item.helper}</HelperText>}
          </div>
        ))}
      </div>
    </div>
  );
}
