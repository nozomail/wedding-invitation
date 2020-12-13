import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';

type Props = {
  navItems: {
    name: string;
    path: string;
  }[];
};

export function Nav({ navItems }: Props): JSX.Element {
  const { pathname } = useLocation();
  return (
    <nav className="Nav">
      {navItems.map((item, index) => (
        <Link
          className={`${pathname === item.path ? 'u-bg-green' : ''}`}
          to={item.path}
          key={index}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
