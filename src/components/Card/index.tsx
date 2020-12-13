import React from 'react';
import './style.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Card({ title, children }: Props): JSX.Element {
  return (
    <div className="Card">
      <h1 className="Card_title">{title}</h1>
      <div className="Card_content">{children}</div>
    </div>
  );
}
