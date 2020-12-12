import React, { ReactNode } from 'react';
import './style.scss';

type Props = {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  type?: 'around' | 'vertical' | 'horizontal' | 'top' | 'bottom' | 'left' | 'right';
  isColor?: boolean;
  isCenterContent?: boolean;
  children: ReactNode;
};

export function Block({
  type = 'around',
  size = 'medium',
  isColor = false,
  isCenterContent = false,
  children,
}: Props): JSX.Element {
  const color = isColor ? ' -color' : '';
  const center = isCenterContent ? ' -center' : '';

  return <div className={`Block -${type} -${size}${color}${center}`}>{children}</div>;
}
