import React from 'react';
import './style.scss';

type Props = {
  type?: 'text' | 'email' | 'password' | 'tel' | 'number';
  name?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export function Input({ type = 'text', ...rest }: Props): JSX.Element {
  return <input className="Input" type={type} {...rest} />;
}
