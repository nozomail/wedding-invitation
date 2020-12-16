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
          to={item.path}
          key={index}
          className={`Nav_item${item.path === pathname ? ' -current' : ''}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
