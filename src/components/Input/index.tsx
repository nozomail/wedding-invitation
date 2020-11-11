import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import './style.scss';

type Props = {
  type?: 'text' | 'email' | 'password' | 'tel' | 'number';
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export function Input({ type = 'text', value, onChange }: Props): JSX.Element {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return <input className="Input" type={type} value={value} onChange={handleChange} />;
}
