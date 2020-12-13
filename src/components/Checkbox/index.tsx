import React from 'react';
import './style.scss';

type Props = {
  name: string;
  label: string;
  checked: boolean;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export function Checkbox({ label, ...rest }: Props): JSX.Element {
  return (
    <label className="Checkbox">
      <input type="checkbox" {...rest} />
      <span className="Checkbox_label">{label}</span>
    </label>
  );
}
