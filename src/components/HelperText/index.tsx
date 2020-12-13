import React from 'react';
import './style.scss';

type Props = {
  children: React.ReactNode;
};

export function HelperText({ children }: Props): JSX.Element {
  return <p className="HelperText">{children}</p>;
}
