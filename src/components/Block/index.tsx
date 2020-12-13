import React from 'react';
import './style.scss';

type Props = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type?: 'around' | 'vertical' | 'horizontal' | 'top' | 'bottom' | 'left' | 'right';
  isColor?: boolean;
  isBorder?: boolean;
  isRoundCorner?: boolean;
  justifyContent?: 'center' | 'between';
  children: React.ReactNode;
};

export function Block({
  type = 'around',
  size = 'md',
  isColor = false,
  isBorder = false,
  isRoundCorner = false,
  justifyContent = undefined,
  children,
}: Props): JSX.Element {
  const color = isColor ? ' -color' : '';
  const border = isBorder ? ' -border' : '';
  const roundCorner = isRoundCorner ? ' -roundCorner' : '';
  const content = justifyContent ? ` -${justifyContent}` : '';

  return (
    <div className={`Block -${type} -${size}${color}${border}${roundCorner}${content}`}>
      {children}
    </div>
  );
}
