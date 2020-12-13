import React, { useState } from 'react';
import './style.scss';

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
  const [isSubmitted, setIsSubimitted] = useState(false);
  const [isStaying, setIsStaying] = useState(false);
  const [guestList, setGuestList] = useState<guestInfoType[]>([{ ...guestInfo }]);

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

  function handleSubmit(e: React.BaseSyntheticEvent) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const controlledInput = ['firstName', 'lastName', 'title', 'kidsMenu', 'diet'];
    for (const name of controlledInput) {
      formData.delete(name);
    }
    const data: { [key: string]: any } = {};
    for (const [key, value] of formData) {
      data[key] = value;
    }
    data.guests = guestList;
    console.log(data);
    setIsSubimitted(true);
  }

  return (
    <div className="Rsvp">
      {isSubmitted ? (
        <div className="Rsvp_thanks">Thank you!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Card title="RSVP">
            <Block justifyContent="center">
              <div
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRsvp(e.target.value === 'yes')
                }
              >
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
                        {guestList.length > 1 && <span className="u-text-red">GUEST {i + 1}</span>}
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
                            required
                          />
                        </InputField>
                        <InputField label="LAST NAME" isRequired>
                          <Input
                            type="text"
                            name="lastName"
                            value={guest.lastName}
                            onChange={(e) => handleGuestInfoChange(e, i)}
                            required
                          />
                        </InputField>
                        <InputField label="TITLE" isRequired>
                          <Select
                            name="title"
                            onChange={(e) => handleGuestInfoChange(e, i)}
                            required
                          >
                            <option value="mr">MR.</option>
                            <option value="mrs">MRS.</option>
                            <option value="ms">MS.</option>
                            <option value="miss">MISS.</option>
                            <option value="dr">DR.</option>
                            <option value="other">OTHER</option>
                          </Select>
                        </InputField>
                        {i > 0 && (
                          <InputField label="">
                            <Checkbox
                              label="KIDS MENU PREFERRED"
                              name="kidsMenu"
                              checked={guest.kidsMenu}
                              onChange={(e) => handleGuestInfoChange(e, i)}
                            />
                          </InputField>
                        )}
                        <InputField label="DIETARY RESTRICTIONS">
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
                    <Button color="secondary" icon="plus" onClick={addGuest}>
                      ADD GUEST
                    </Button>
                  </Block>

                  <InputField label="POSTAL ADDRESS" isRequired>
                    <Textarea name="address" required></Textarea>
                  </InputField>
                  <InputField label="POSTCODE" isRequired>
                    <Input name="postcode" required />
                  </InputField>
                  <InputField label="PHONE NUMBER" isRequired>
                    <Input name="phone" required />
                  </InputField>
                  <InputField
                    label="DO YOU REQUIRE A SEAT/SEATS ON THE 3.45 PM BUS FROM MATIATIA WHARF TO MUDBRICK?"
                    isRequired
                  >
                    <RadioButton name="bus" label="YES" value="yes" required />
                    <RadioButton name="bus" label="NO" value="no" />
                    <RadioButton name="bus" label="NOT SURE YET" value="unknown" />
                  </InputField>
                  <InputField
                    label="ARE YOU STAYING ON WAIHEKE ISLAND AFTER THE RECEPTION?"
                    isRequired
                  >
                    <div
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setIsStaying(e.target.value === 'yes')
                      }
                    >
                      <RadioButton name="stay" label="YES" value="yes" required />
                      <RadioButton name="stay" label="NO" value="no" />
                      <RadioButton name="stay" label="NOT SURE YET" value="unknown" />
                    </div>
                  </InputField>
                  {isStaying && (
                    <InputField label="LET US KNOW THE ADDRESS OF YOUR ACCOMMODATION SO WE CAN ARRANGE YOUR TRANSPORT.">
                      <Input />
                    </InputField>
                  )}
                  <InputField
                    label="WOULD YOU LIKE TO JOIN A BEACH BBQ LUNCH IN AUCKLAND ON THE DAY AFTER THE WEDDING?"
                    isRequired
                  >
                    <RadioButton name="bbq" label="YES" value="yes" required />
                    <RadioButton name="bbq" label="NO" value="no" />
                    <RadioButton name="bbq" label="NOT SURE YET" value="unknown" />
                  </InputField>
                  <InputField label="PLEASE LET US KNOW IF YOU HAVE ANY QUESTIONS OR COMMENTS.">
                    <Textarea name="message" required></Textarea>
                  </InputField>
                </div>
              ) : (
                <div>
                  <Block type="top" size="md">
                    <InputField label="MESSAGE">
                      <Textarea name="message"></Textarea>
                    </InputField>
                  </Block>
                </div>
              ))}
          </Card>

          {rsvp !== null && (
            <Block type="top" size="lg">
              <Button type="submit" color="primary" icon="plane">
                SUBMIT
              </Button>
            </Block>
          )}
        </form>
      )}
    </div>
  );
}
