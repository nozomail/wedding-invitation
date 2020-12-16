import React, { useState } from 'react';

import { Card } from '@components/Card';
import { Block } from '@components/Block';
import { RsvpReview } from '@components/RsvpReview';
import { InputField } from '@components/InputField';
import { Input } from '@components/Input';
import { RadioButton } from '@components/RadioButton';
import { Checkbox } from '@components/Checkbox';
import { Select } from '@components/Select';
import { Textarea } from '@components/Textarea';
import { Button } from '@components/Button';

import { useUserContext } from '@hooks/useUserContext';
import { GuestProps, RsvpProps } from '@propTypes/user';
import { LABEL, GUEST_INFO, CONTROLLED_INPUT } from '@constants/rsvp';

import deleteIcon from './assets/icon_delete.svg';

export function Rsvp(): JSX.Element {
  const [rsvp, setRsvp] = useState<boolean | null>(null);
  const [isStaying, setIsStaying] = useState(false);
  const [guestList, setGuestList] = useState<GuestProps[]>([{ ...GUEST_INFO }]);
  const { user, submitRsvp } = useUserContext();

  function handleGuestInfoChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    i: number,
  ): void {
    const newGuestList = [...guestList];
    if (e.target.type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      newGuestList[i][e.target.name] = target.checked;
    } else {
      newGuestList[i][e.target.name] = e.target.value;
    }
    setGuestList(newGuestList);
  }

  function handleRadioButtonsOnly(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.type !== 'radio') return;
    setIsStaying(e.target.value === 'yes');
  }

  function addGuest() {
    setGuestList([...guestList, { ...GUEST_INFO }]);
  }

  function removeGuest(e: React.MouseEvent<HTMLAnchorElement>, i: number) {
    e.preventDefault();
    setGuestList(guestList.filter((guest, index) => index !== i));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    for (const name of CONTROLLED_INPUT) {
      formData.delete(name);
    }
    const data: { [key: string]: any } = {};
    for (const [key, value] of formData) {
      data[key] = value;
    }
    data.rsvp = rsvp;
    if (rsvp) {
      data.guests = guestList;
    }
    submitRsvp(data as RsvpProps);
  }

  return (
    <div className="Rsvp">
      {user.rsvp ? (
        <Card title="RSVP">
          <RsvpReview rsvp={user.rsvp} />
        </Card>
      ) : (
        <form onSubmit={handleSubmit}>
          <Card title="RSVP">
            <Block justifyContent="center">
              <div
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRsvp(e.target.value === 'yes')
                }
              >
                <RadioButton name="rsvp" label={LABEL.rsvpYes} value="yes" />
                <RadioButton name="rsvp" label={LABEL.rsvpNo} value="no" />
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
                        <InputField label={LABEL.firstName} isRequired>
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
                        <InputField label={LABEL.lastName} isRequired>
                          <Input
                            type="text"
                            name="lastName"
                            value={guest.lastName}
                            onChange={(e) => handleGuestInfoChange(e, i)}
                            required
                          />
                        </InputField>
                        <InputField label={LABEL.title} isRequired>
                          <Select
                            name="title"
                            defaultValue=""
                            onChange={(e) => handleGuestInfoChange(e, i)}
                            required
                          >
                            <option value="" disabled></option>
                            <option value="mr">MR.</option>
                            <option value="mrs">MRS.</option>
                            <option value="ms">MS.</option>
                            <option value="miss">MISS.</option>
                            <option value="dr">DR.</option>
                            <option value="other">OTHER</option>
                          </Select>
                          {guest.title === 'other' && (
                            <InputField label={LABEL.titleOther} isRequired>
                              <Input
                                type="text"
                                name="titleOther"
                                value={guest.titleOther}
                                onChange={(e) => handleGuestInfoChange(e, i)}
                                required
                              />
                            </InputField>
                          )}
                        </InputField>

                        {i > 0 && (
                          <InputField label="">
                            <Checkbox
                              label={LABEL.kidsMenu}
                              name="kidsMenu"
                              checked={guest.kidsMenu}
                              onChange={(e) => handleGuestInfoChange(e, i)}
                            />
                          </InputField>
                        )}
                        <InputField label={LABEL.diet}>
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

                  <InputField label={LABEL.address} isRequired>
                    <Textarea name="address" required></Textarea>
                  </InputField>
                  <InputField label={LABEL.postcode} isRequired>
                    <Input name="postcode" required />
                  </InputField>
                  <InputField label={LABEL.phone} isRequired>
                    <Input name="phone" required />
                  </InputField>
                  <InputField label={LABEL.bus} isRequired>
                    <RadioButton name="bus" label="YES" value="yes" required />
                    <RadioButton name="bus" label="NO" value="no" />
                    <RadioButton name="bus" label="NOT SURE YET" value="unknown" />
                  </InputField>
                  <InputField label={LABEL.stay} isRequired>
                    <div
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleRadioButtonsOnly(e)
                      }
                    >
                      <RadioButton name="stay" label="YES" value="yes" required />
                      {isStaying && (
                        <InputField label={LABEL.stayAddress}>
                          <Input name="stayAddress" />
                        </InputField>
                      )}
                      <RadioButton name="stay" label="NO" value="no" />
                      <RadioButton name="stay" label="NOT SURE YET" value="unknown" />
                    </div>
                  </InputField>
                  <InputField label={LABEL.bbq} isRequired>
                    <RadioButton name="bbq" label="YES" value="yes" required />
                    <RadioButton name="bbq" label="NO" value="no" />
                    <RadioButton name="bbq" label="NOT SURE YET" value="unknown" />
                  </InputField>
                  <InputField label={LABEL.message}>
                    <Textarea name="message"></Textarea>
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
