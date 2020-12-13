import React from 'react';
import './style.scss';

type Props = {
  url: string;
  icon?: 'arrow' | 'email' | 'map' | 'phone';
  children: React.ReactNode;
};

export function TextLink({ url, icon, children }: Props): JSX.Element {
  const linkStyle = icon ? ` -icon -${icon}` : '';

  return (
    <div className="TextLink">
      <a className={`TextLink_text${linkStyle}`} href={url} target="_blank">
        {children}
      </a>
    </div>
  );
}
