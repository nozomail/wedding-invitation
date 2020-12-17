import React from 'react';
import './style.scss';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function Container({ className, children, ...rest }: Props): JSX.Element {
  return (
    <div className={`Container ${className}`} {...rest}>
      {children}
    </div>
  );
}
