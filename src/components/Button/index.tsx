import React from 'react';
import './style.scss';

type Props = {
  type: 'primary' | 'secondary';
  text: string;
  icon?: 'pen' | 'plane' | 'plus' | 'lock';
};

export function Button({ type, text, icon }: Props): JSX.Element {
  const buttonStyle = icon ? ` -icon -${icon}` : '';

  return (
    <button type="button" className={`Button -${type}${buttonStyle}`}>
      <span>{text}</span>
    </button>
  );
}
