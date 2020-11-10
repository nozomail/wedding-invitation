import React, { ReactNode } from 'react';
import './style.scss';

type Props = {
  title: string;
  icon?: string;
  children: ReactNode;
};

export function Section({ title, icon, children }: Props): JSX.Element {
  const titleStyle = icon ? ` -icon -${icon}` : '';

  return (
    <section className="Section">
      <h1 className={`Section_title ${titleStyle}`}>{title}</h1>
      <div className="Section_content">{children}</div>
    </section>
  );
}