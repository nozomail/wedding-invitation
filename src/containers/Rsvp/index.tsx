import React, { useState, useEffect } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

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
  const [isEditting, setIsEditting] = useState(false);
  const [attendance, setAttendance] = useState('');
  const [stay, setStay] = useState('');
  const [guestList, setGuestList] = useState<GuestProps[]>([{ ...GUEST_INFO }]);
  const { user, submitRsvp } = useUserContext();
  const rsvp = user.rsvp;

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
    setStay(e.target.value);
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
    if (attendance === 'yes') {
      data.guests = guestList;
    } else {
      delete data.guests;
    }
    submitRsvp(data as RsvpProps, setIsEditting);
  }

  function handleEdit() {
    setIsEditting(true);
    setAttendance(rsvp.attendance);
    setStay(rsvp.stay);
    setGuestList(rsvp.guests ? rsvp.guests : [{ ...GUEST_INFO }]);
  }

  useEffect(() => {
    document.querySelector('.App').scrollTo(0, 0);
  }, [isEditting]);

  return (
    <div className="Rsvp">
      <SwitchTransition mode="out-in">
        {rsvp && !isEditting ? (
          <CSSTransition timeout={250} classNames="element" key="0">
            <div>
              <Card title="RSVP">
                <RsvpReview rsvp={rsvp} />
              </Card>
              <Block type="top" size="lg" justifyContent="center">
                <Button color="primary" icon="pen" onClick={handleEdit}>
                  EDIT
                </Button>
              </Block>
            </div>
          </CSSTransition>
        ) : (
          <CSSTransition timeout={250} classNames="element" key="1">
            <form onSubmit={handleSubmit}>
              <Card title="RSVP">
                <Block justifyContent="center">
                  <div
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setAttendance(e.target.value)
                    }
                  >
                    <RadioButton
                      name="attendance"
                      label={LABEL.attendanceYes}
                      value="yes"
                      defaultChecked={rsvp?.attendance === 'yes'}
                    />
                    <RadioButton
                      name="attendance"
                      label={LABEL.attendanceNo}
                      value="no"
                      defaultChecked={rsvp?.attendance === 'no'}
                    />
                  </div>
                </Block>

                {attendance !== '' && (
                  <SwitchTransition>
                    {attendance === 'yes' ? (
                      <CSSTransition timeout={250} classNames="element" key="0">
                        <div>
                          {guestList.map((guest, i) => (
                            <Block type="vertical" size="sm" key={i}>
                              <Block type="bottom" size="xs" justifyContent="between">
                                {guestList.length > 1 && (
                                  <span className="u-text-red">GUEST {i + 1}</span>
                                )}
                                {i > 0 && (
                                  <a
                                    className="u-text-red u-pointer"
                                    onClick={(e) => removeGuest(e, i)}
                                  >
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
                                    defaultValue={guest.title}
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
                            <Textarea
                              name="address"
                              defaultValue={rsvp?.address}
                              required
                            ></Textarea>
                          </InputField>
                          <InputField label={LABEL.postcode} isRequired>
                            <Input name="postcode" defaultValue={rsvp?.postcode} required />
                          </InputField>
                          <InputField label={LABEL.phone} isRequired>
                            <Input name="phone" defaultValue={rsvp?.phone} required />
                          </InputField>
                          <InputField label={LABEL.bus} isRequired>
                            <RadioButton
                              name="bus"
                              label="YES"
                              value="yes"
                              defaultChecked={rsvp?.bus === 'yes'}
                              required
                            />
                            <RadioButton
                              name="bus"
                              label="NO"
                              value="no"
                              defaultChecked={rsvp?.bus === 'no'}
                            />
                            <RadioButton
                              name="bus"
                              label="NOT SURE YET"
                              value="unknown"
                              defaultChecked={rsvp?.bus === 'unknown'}
                            />
                          </InputField>
                          <InputField label={LABEL.stay} isRequired>
                            <div
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleRadioButtonsOnly(e)
                              }
                            >
                              <RadioButton
                                name="stay"
                                label="YES"
                                value="yes"
                                defaultChecked={rsvp?.stay === 'yes'}
                                required
                              />
                              {stay === 'yes' && (
                                <InputField label={LABEL.stayAddress}>
                                  <Input name="stayAddress" defaultValue={rsvp?.stayAddress} />
                                </InputField>
                              )}
                              <RadioButton
                                name="stay"
                                label="NO"
                                value="no"
                                defaultChecked={rsvp?.stay === 'no'}
                              />
                              <RadioButton
                                name="stay"
                                label="NOT SURE YET"
                                value="unknown"
                                defaultChecked={rsvp?.stay === 'unknown'}
                              />
                            </div>
                          </InputField>
                          <InputField label={LABEL.bbq} isRequired>
                            <RadioButton
                              name="bbq"
                              label="YES"
                              value="yes"
                              defaultChecked={rsvp?.bbq === 'yes'}
                              required
                            />
                            <RadioButton
                              name="bbq"
                              label="NO"
                              value="no"
                              defaultChecked={rsvp?.bbq === 'no'}
                            />
                            <RadioButton
                              name="bbq"
                              label="NOT SURE YET"
                              value="unknown"
                              defaultChecked={rsvp?.bbq === 'unknown'}
                            />
                          </InputField>
                          <InputField label={LABEL.question}>
                            <Textarea name="question" defaultValue={rsvp?.question}></Textarea>
                          </InputField>
                        </div>
                      </CSSTransition>
                    ) : (
                      <CSSTransition timeout={250} classNames="element" key="1">
                        <div>
                          <Block type="top" size="md">
                            <InputField label="MESSAGE">
                              <Textarea name="message" defaultValue={rsvp?.message}></Textarea>
                            </InputField>
                          </Block>
                        </div>
                      </CSSTransition>
                    )}
                  </SwitchTransition>
                )}
              </Card>

              {attendance !== '' && (
                <Block type="top" size="lg" justifyContent="center">
                  <div className="u-text-center">
                    {rsvp && (
                      <Block type="bottom" size="md" justifyContent="center">
                        <Button
                          type="submit"
                          color="secondary"
                          onClick={() => setIsEditting(false)}
                        >
                          CANCEL
                        </Button>
                      </Block>
                    )}
                    <Button type="submit" color="primary" icon="plane">
                      {rsvp ? 'UPDATE' : 'SUBMIT'}
                    </Button>
                  </div>
                </Block>
              )}
            </form>
          </CSSTransition>
        )}
      </SwitchTransition>
    </div>
  );
}
