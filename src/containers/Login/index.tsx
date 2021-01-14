import React, { useState } from 'react';
import './style.scss';

import { InputField } from '@components/InputField';
import { Input } from '@components/Input';
import { Block } from '@components/Block';
import { Button } from '@components/Button';

import { useAuthContext } from '@hooks/useAuthContext';
import { useUserContext } from '@hooks/useUserContext';

import img from './assets/front.png';

export function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuthContext();
  const { setIsLoading } = useUserContext();

  function handleSubmit(e: React.MouseEvent<HTMLElement | MouseEvent>) {
    e.preventDefault();
    login(email, password, setError, setIsLoading);
  }

  return (
    <div className="Login">
      <form>
        <Block type="bottom" size="xl" justifyContent="center">
          <img className="Login_image" src={img} alt="Nozomi & Matthew 01.01.2020" />
        </Block>
        <InputField label="EMAIL">
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputField>
        <InputField label="PASSWORD">
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputField>
        <Block type="top" size="md">
          <div className="u-text-red">{error}</div>
        </Block>
        <Block type="top" size="xl" justifyContent="center">
          <Button type="submit" color="primary" icon="lock" onClick={(e) => handleSubmit(e)}>
            OPEN
          </Button>
        </Block>
      </form>
    </div>
  );
}
