import React from 'react';
import './style.scss';

type Props = {
  rows?: number;
  name?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export function Textarea({ rows = 4, ...rest }: Props): JSX.Element {
  return <textarea className="Textarea" rows={rows} {...rest}></textarea>;
}
