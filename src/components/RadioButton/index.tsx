import React from 'react';
import './style.scss';

type Props = {
  name: string;
  label: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
};

export function RadioButton({ label, ...rest }: Props): JSX.Element {
  return (
    <label className="RadioButton">
      <input type="radio" {...rest} />
      <span className="RadioButton_label">{label}</span>
    </label>
  );
}
