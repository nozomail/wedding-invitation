import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import './style.scss';

type Props = {
  type?: 'text' | 'email' | 'password' | 'tel' | 'number';
  name?: string;
  value?: string;
  onChange?: Dispatch<SetStateAction<string>>;
};

export function Input({ type = 'text', onChange, ...rest }: Props): JSX.Element {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return <input className="Input" type={type} onChange={handleChange} {...rest} />;
}
