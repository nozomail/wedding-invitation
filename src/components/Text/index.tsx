import React, { ReactNode } from 'react';
import './style.scss';

type Props = {
  isCenter?: boolean;
  children: ReactNode;
};

export function Text({ isCenter = false, children }: Props): JSX.Element {
  const textStyle = isCenter ? ' -center' : '';

  return <p className={`Text${textStyle}`}>{children}</p>;
}
