import React, { useState } from 'react';

import { Card } from '@components/Card';
import { Block } from '@components/Block';
import { RadioButton } from '@components/RadioButton';
import { InputField } from '@components/InputField';
import { Input } from '@components/Input';
import { Select } from '@components/Select';
import { Textarea } from '@components/Textarea';

export function Rsvp(): JSX.Element {
  const [rsvp, setRsvp] = useState<boolean | null>(null);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.value === 'yes') {
      setRsvp(true);
    } else {
      setRsvp(false);
    }
  }
  return (
    <div className="Rsvp">
      <Card title="RSVP">
        <Block isCenterContent>
          <div onChange={handleOnChange}>
            <RadioButton name="rsvp" label="ACCEPT WITH PLEASURE" value="yes" />
            <RadioButton name="rsvp" label="DICLINE WITH REGRET" value="no" />
          </div>
        </Block>
        {rsvp !== null &&
          (rsvp ? (
            <div>
              GUEST1
              <Block isColor isRoundCorner>
                <InputField label="FIRST NAME" isRequired>
                  <Input type="text" name="firstName" />
                </InputField>
                <InputField label="LAST NAME" isRequired>
                  <Input type="text" name="lastName" />
                </InputField>
                <InputField label="TITLE" isRequired>
                  <Select>
                    <option value="mr">MR.</option>
                    <option value="mrs">MRS.</option>
                    <option value="ms">MS.</option>
                    <option value="miss">MISS.</option>
                    <option value="dr">DR.</option>
                    <option value="other">OTHER</option>
                  </Select>
                </InputField>
                <InputField label="DIETARY RESTRICTIONS" isRequired>
                  <Textarea name="diet"></Textarea>
                </InputField>
              </Block>
            </div>
          ) : (
            <div>no</div>
          ))}
      </Card>
    </div>
  );
}
