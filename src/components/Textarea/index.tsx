import React from 'react';
import './style.scss';

type Props = {
  rows?: number;
};

export function Textarea({ rows = 4 }: Props): JSX.Element {
  return <textarea className="Textarea" rows={rows}></textarea>;
}
