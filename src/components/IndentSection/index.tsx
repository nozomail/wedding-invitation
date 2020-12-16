import React from 'react';
import './style.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function IndentSection({ title, children }: Props): JSX.Element {
  return (
    <section className="IndentSection">
      <h2 className="IndentSection_title">{title}</h2>
      <div className="IndentSection_content">{children}</div>
    </section>
  );
}
