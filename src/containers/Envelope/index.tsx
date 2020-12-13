import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

import { CardEnvelope } from '@components/CardEnvelope';
import { Button } from '@components/Button';

const guests = [
  {
    firstName: 'John',
    lastName: 'Smith',
    title: 'Mr',
  },
  {
    firstName: 'Kate',
    lastName: 'Smith',
    title: 'Mrs',
  },
];

export function Envelope(): JSX.Element {
  const [height, setHeight] = useState(0);
  const [cardState, setCardState] = useState('');
  const history = useHistory();

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCardState('is-flipped');
    }, 4000);
    const timer2 = setTimeout(() => {
      setCardState('is-flipped is-open');
    }, 6000);
    const timer3 = setTimeout(() => {
      setCardState('is-flipped is-open is-pulled');
    }, 8000);
    const timer4 = setTimeout(() => {
      history.push('/invitation');
    }, 11000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="Envelope" style={{ height: `${height}px` }}>
      <CardEnvelope guests={guests} cardState={cardState}></CardEnvelope>
      <div className="Envelope_skip">
        <Button
          color="secondary"
          onClick={() => {
            history.push('/invitation');
          }}
        >
          Skip
        </Button>
      </div>
    </div>
  );
}
