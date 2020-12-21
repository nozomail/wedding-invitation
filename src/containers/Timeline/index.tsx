import React from 'react';

import { Card } from '@components/Card';
import { TimelineItem } from '@components/TimelineItem';
import { TIMELINE_ITEMS } from '@constants/timeline';

export function Timeline(): JSX.Element {
  return (
    <div className="Timeline">
      <Card title="Wedding Day Timeline">
        {TIMELINE_ITEMS.map((time, index) => (
          <TimelineItem time={time.time} items={time.items} key={index} />
        ))}
      </Card>
    </div>
  );
}
