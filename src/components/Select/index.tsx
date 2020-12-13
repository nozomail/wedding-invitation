import React from 'react';
import './style.scss';

type Props = {
  name?: string;
  value?: any;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  children: React.ReactNode;
};

export function Select({ children, ...rest }: Props): JSX.Element {
  return (
    <select className="Select" {...rest}>
      {children}
    </select>
  );
}
