import React from 'react';
import './style.scss';

type Props = {
  url: string;
  text: string;
  icon?: string;
};

export function TextLink({ url, text, icon }: Props): JSX.Element {
  const linkStyle = icon ? ` -icon -${icon}` : '';

  return (
    <div className="TextLink">
      <a className={`TextLink_text ${linkStyle}`} href={url} target="_blank">
        {text}
      </a>
    </div>
  );
}
