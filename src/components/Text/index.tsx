import React, { ReactNode } from 'react';
import './style.scss';

type Props = {
  children: ReactNode;
};

export function Text({ children }: Props): JSX.Element {
  return <p className="Text">{children}</p>;
}
