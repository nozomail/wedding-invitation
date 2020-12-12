import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={item.path} key={index}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
