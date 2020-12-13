import React from 'react';
import './style.scss';

type Props = {
  isCenter?: boolean;
  children: React.ReactNode;
};

export function Text({ isCenter = false, children }: Props): JSX.Element {
  const textStyle = isCenter ? ' -center' : '';

  return <p className={`Text${textStyle}`}>{children}</p>;
}
