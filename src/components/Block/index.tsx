import React, { ReactNode } from 'react';
import './style.scss';

type Props = {
  size?: 'small' | 'medium' | 'large';
  type?: 'around' | 'vertical' | 'horizontal' | 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
};

export function Block({ size = 'medium', type = 'around', children }: Props): JSX.Element {
  return <div className={`Block -${type} -${size}`}>{children}</div>;
}
