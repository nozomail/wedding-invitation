import React, { ReactNode } from 'react';
import './style.scss';

type Props = {
  children: ReactNode;
};

export function HelperText({ children }: Props): JSX.Element {
  return <p className="HelperText">{children}</p>;
}
