import React from 'react';
import './style.scss';

type Props = {
  name: string;
  label: string;
  value: string;
};

export function RadioButton({ name, label, value }: Props): JSX.Element {
  return (
    <label className="RadioButton">
      <input type="radio" name={name} value={value} />
      <span className="RadioButton_label">{label}</span>
    </label>
  );
}
