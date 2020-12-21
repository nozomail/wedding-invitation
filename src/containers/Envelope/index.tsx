import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './style.scss';

import { CardEnvelope } from '@components/CardEnvelope';
import { Button } from '@components/Button';

import { useUserContext } from '@hooks/useUserContext';

export function Envelope(): JSX.Element {
  const [height, setHeight] = useState(0);
  const [cardState, setCardState] = useState('');
  const { user } = useUserContext();
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
      <CardEnvelope guests={user.recipients} cardState={cardState}></CardEnvelope>
      <div className="Envelope_skip">
        <Link to="/invitation">
          <Button color="secondary">SKIP</Button>
        </Link>
      </div>
    </div>
  );
}
