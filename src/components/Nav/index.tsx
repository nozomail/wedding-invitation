import React from 'react';
import './style.scss';

type Props = {
  navItems: {
    name: string;
    path: string;
  }[];
};

export function Nav({ navItems }: Props): JSX.Element {
  return (
    <nav className="Nav">
      {navItems.map((item, index) => (
        <a href={item.path} key={index}>
          {item.name}
        </a>
      ))}
    </nav>
  );
}
