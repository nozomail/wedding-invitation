import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

import { InputField } from '@components/InputField';
import { Input } from '@components/Input';
import { Block } from '@components/Block';
import { Button } from '@components/Button';

import { useAuthContext } from '@hooks/useAuthContext';

import img from './assets/front.png';

export function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthContext();
  const history = useHistory();

  function handleOnClick(): void {
    login();
    history.push('/envelope');
  }

  return (
    <div className="Login">
      <Block type="bottom" size="xlarge" isCenterContent>
        <img className="Login_image" src={img} alt="Nozomi & Matthew 01.01.2020" />
      </Block>
      <InputField label="EMAIL">
        <Input type="email" value={email} onChange={setEmail} />
      </InputField>
      <InputField label="PASSWORD">
        <Input type="password" value={password} onChange={setPassword} />
      </InputField>
      <Block type="top" size="xlarge">
        <Button type="primary" text="OPEN" icon="lock" onClick={handleOnClick} />
      </Block>
    </div>
  );
}
