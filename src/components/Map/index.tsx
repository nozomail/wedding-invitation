import React from 'react';
import './style.scss';

type Props = {
  url: string;
};
export function Map({ url }: Props): JSX.Element {
  return (
    <div className="Map">
      <iframe width="100%" height="100%" src={url}></iframe>
    </div>
  );
}
