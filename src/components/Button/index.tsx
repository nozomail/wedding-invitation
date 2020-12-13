import React from 'react';
import './style.scss';

type Props = {
  type?: 'button' | 'submit';
  color: 'primary' | 'secondary';
  icon?: 'pen' | 'plane' | 'plus' | 'lock';
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
};

export function Button({ type = 'button', color, icon, children, ...rest }: Props): JSX.Element {
  const buttonStyle = icon ? ` -icon -${icon}` : '';

  return (
    <button type={type} className={`Button -${color}${buttonStyle}`} {...rest}>
      <span>{children}</span>
    </button>
  );
}
