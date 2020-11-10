import React from 'react';
import './style.scss';

type Props = {
  thumbnails: {
    name: string;
    image: string;
  }[];
};

export function ThumbnailList({ thumbnails }: Props): JSX.Element {
  return (
    <ul className="ThumbnailList">
      {thumbnails.map((item, index) => (
        <li
          className="ThumbnailList_item"
          style={{ backgroundImage: `url(${item.image})` }}
          key={index}
        >
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}
