import React from 'react';
import './style.scss';

type Props = {
  type: 'primary' | 'secondary';
  text: string;
  icon?: 'pen' | 'plane' | 'plus' | 'lock';
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export function Button({ type, text, icon, onClick }: Props): JSX.Element {
  const buttonStyle = icon ? ` -icon -${icon}` : '';

  return (
    <button type="button" className={`Button -${type}${buttonStyle}`} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
}
