import React, { ReactNode } from 'react';
import './style.scss';

type Props = {
  title: string;
  children: ReactNode;
};

export function IndentSection({ title, children }: Props): JSX.Element {
  return (
    <section className="IndentSection">
      <h3 className="IndentSection_title">{title}</h3>
      <div className="IndentSection_content">{children}</div>
    </section>
  );
}