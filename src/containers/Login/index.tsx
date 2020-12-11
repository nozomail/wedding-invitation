import React, { useState } from 'react';

import { InputField } from '@components/InputField';
import { Input } from '@components/Input';
import { Block } from '@components/Block';
import { Button } from '@components/Button';

export function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Login">
      <InputField label="EMAIL">
        <Input type="email" value={email} onChange={setEmail} />
      </InputField>
      <InputField label="PASSWORD">
        <Input type="password" value={password} onChange={setPassword} />
      </InputField>
      <Block type="top" size="xlarge">
        <Button type="primary" text="Login" icon="lock" />
      </Block>
    </div>
  );
}
