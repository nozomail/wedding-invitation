import React, { useState } from 'react';

import { Card } from '@components/Card';
import { Block } from '@components/Block';
import { InputField } from '@components/InputField';
import { Input } from '@components/Input';
import { RadioButton } from '@components/RadioButton';
import { Checkbox } from '@components/Checkbox';
import { Select } from '@components/Select';
import { Textarea } from '@components/Textarea';
import { Button } from '@components/Button';

import deleteIcon from './assets/icon_delete.svg';

const guestInfo = {
  firstName: '',
  lastName: '',
  title: '',
  kidsMenu: false,
  diet: '',
};

type guestInfoType = {
  [key: string]: any;
  firstName: string;
  lastName: string;
  title: string;
  kidsMenu: boolean;
  diet: string;
};

export function Rsvp(): JSX.Element {
  const [rsvp, setRsvp] = useState<boolean | null>(null);
  const [guestList, setGuestList] = useState<guestInfoType[]>([{ ...guestInfo }]);

  function handleRsvpChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.value === 'yes') {
      setRsvp(true);
    } else {
      setRsvp(false);
    }
  }

  function handleGuestInfoChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    i: number,
  ): void {
    const newGuestList = [...guestList];
    newGuestList[i][e.target.name] = e.target.value;
    setGuestList(newGuestList);
  }

  function addGuest() {
    setGuestList([...guestList, { ...guestInfo }]);
  }

  function removeGuest(e: React.MouseEvent<HTMLAnchorElement>, i: number) {
    e.preventDefault();
    setGuestList(guestList.filter((guest, index) => index !== i));
  }

  return (
    <div className="Rsvp">
      <Card title="RSVP">
        <Block justifyContent="center">
          <div onChange={handleRsvpChange}>
            <RadioButton name="rsvp" label="ACCEPT WITH PLEASURE" value="yes" />
            <RadioButton name="rsvp" label="DICLINE WITH REGRET" value="no" />
          </div>
        </Block>
        {rsvp !== null &&
          (rsvp ? (
            <div>
              {guestList.map((guest, i) => (
                <Block type="vertical" size="sm" key={i}>
                  <Block type="bottom" size="xs" justifyContent="between">
                    <span className="u-text-red">GUEST {i + 1}</span>
                    {i > 0 && (
                      <a className="u-text-red u-pointer" onClick={(e) => removeGuest(e, i)}>
                        <img src={deleteIcon} width="10" /> DELETE
                      </a>
                    )}
                  </Block>
                  <Block isColor isRoundCorner>
                    <InputField label="FIRST NAME" isRequired>
                      <Input
                        type="text"
                        name="firstName"
                        value={guest.firstName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleGuestInfoChange(e, i)
                        }
                      />
                    </InputField>
                    <InputField label="LAST NAME" isRequired>
                      <Input
                        type="text"
                        name="lastName"
                        value={guest.lastName}
                        onChange={(e) => handleGuestInfoChange(e, i)}
                      />
                    </InputField>
                    <InputField label="TITLE" isRequired>
                      <Select name="title" onChange={(e) => handleGuestInfoChange(e, i)}>
                        <option value="mr">MR.</option>
                        <option value="mrs">MRS.</option>
                        <option value="ms">MS.</option>
                        <option value="miss">MISS.</option>
                        <option value="dr">DR.</option>
                        <option value="other">OTHER</option>
                      </Select>
                    </InputField>
                    <InputField label="">
                      <Checkbox
                        label="KIDS MENU PREFERRED"
                        name="kidsMenu"
                        checked={guest.kidsMenu}
                        onChange={(e) => handleGuestInfoChange(e, i)}
                      />
                    </InputField>
                    <InputField label="DIETARY RESTRICTIONS" isRequired>
                      <Textarea
                        name="diet"
                        value={guest.diet}
                        onChange={(e) => handleGuestInfoChange(e, i)}
                      ></Textarea>
                    </InputField>
                  </Block>
                </Block>
              ))}
              <Block type="vertical" size="md" justifyContent="center">
                <Button type="secondary" icon="plus" onClick={addGuest}>
                  ADD GUEST
                </Button>
              </Block>
            </div>
          ) : (
            <div>no</div>
          ))}
      </Card>
    </div>
  );
}
