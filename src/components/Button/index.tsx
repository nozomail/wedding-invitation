import React from 'react';
import './style.scss';

type Props = {
  type: 'primary' | 'secondary';
  icon?: 'pen' | 'plane' | 'plus' | 'lock';
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
};

export function Button({ type, icon, children, ...rest }: Props): JSX.Element {
  const buttonStyle = icon ? ` -icon -${icon}` : '';

  return (
    <button type="button" className={`Button -${type}${buttonStyle}`} {...rest}>
      <span>{children}</span>
    </button>
  );
}
