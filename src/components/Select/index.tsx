import React, { ReactNode } from 'react';
import './style.scss';

type Props = {
  children: ReactNode;
};

export function Select({ children }: Props): JSX.Element {
  return <select className="Select">{children}</select>;
}
