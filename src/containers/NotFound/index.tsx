import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { Block } from '@components/Block';
import { Text } from '@components/Text';
import { Button } from '@components/Button';

export function NotFound(): JSX.Element {
  return (
    <div className="NotFound">
      <Block type="vertical" size="xl" justifyContent="center">
        <div>
          <h1 className="NotFound_title">404 NOT FOUND</h1>
          <Text>Sorry, the page you requested could not found.</Text>
        </div>
      </Block>
      <Block justifyContent="center">
        <Link to="/invitation">
          <Button color="primary">GO TO INVITATION</Button>
        </Link>
      </Block>
    </div>
  );
}
