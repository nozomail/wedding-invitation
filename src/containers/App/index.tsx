import React, { useState } from 'react';
import '../../styles/global.scss';

import { Card } from '../../components/Card';
import { Section } from '../../components/Section';
import { IndentSection } from '../../components/IndentSection';
import { TextLink } from '../../components/TextLink';
import { Button } from '../../components/Button';
import { Nav } from '../../components/Nav';
import { ThumbnailList } from '../../components/ThumbnailList';
import { InputField } from '../../components/InputField';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Select } from '../../components/Select';
import { RadioButton } from '../../components/RadioButton';

import imgFlight from '../../assets/images/honeymoon_flight1.jpg';
import imgColosseum from '../../assets/images/honeymoon_colosseum.jpg';
import imgPantheon from '../../assets/images/honeymoon_pantheon.jpg';
import imgVatican from '../../assets/images/honeymoon_vatican.jpg';

export function App(): JSX.Element {
  const navItems = [
    {
      name: 'INVITAION',
      path: 'invitation',
    },
    {
      name: 'RSVP',
      path: 'rsvp',
    },
    {
      name: 'WEDDING DAY TIMELINE',
      path: 'timeline',
    },
    {
      name: 'HONEYMOON CONTRIBUTION',
      path: 'contribution',
    },
    {
      name: 'ENVELOPE',
      path: 'envelope',
    },
  ];

  const thumbnails = [
    {
      name: 'Flight',
      image: imgFlight,
    },
    {
      name: 'Colosseum',
      image: imgColosseum,
    },
    {
      name: 'Pantheon',
      image: imgPantheon,
    },
    {
      name: 'Vatican',
      image: imgVatican,
    },
  ];

  const [firstName, setFirstName] = useState('');

  return (
    <div className="App">
      <Card title="Venue Info & Map">
        <Section title="MUDBRICK VINEYARD & RESTAURANT" icon="grape">
          <IndentSection title="PHONE">
            <TextLink url="tel:+6493729050" text="+64 9 372 9050" icon="phone" />
          </IndentSection>
          <IndentSection title="ADDRESS">
            <TextLink
              url="https://goo.gl/maps/CLfGz6X3tikkYNMC7"
              text="126 Church Bay Road, Oneroa, Waiheke, New Zealand"
              icon="map"
            />
          </IndentSection>
          <IndentSection title="EMAIL">
            <TextLink url="mailto:info@mudbrick.co.nz" text="info@mudbrick.co.nz" icon="email" />
          </IndentSection>
        </Section>

        <InputField label="FIRST NAME" isRequired>
          <Input type="text" value={firstName} onChange={setFirstName} />
        </InputField>
        <InputField label="POSTAL ADDRESS" isRequired>
          <Textarea />
        </InputField>
        <InputField label="TITLE">
          <Select>
            <option value="mr">MR.</option>
            <option value="mrs">MRS.</option>
            <option value="ms">MS.</option>
            <option value="miss">MISS.</option>
            <option value="dr">DR.</option>
            <option value="other">OTHER</option>
          </Select>
        </InputField>
        <InputField
          label="Do you require a seat/seats on the 3.45 pm bus from Matiatia Wharf to Mudbrick?"
          isQuestion
        >
          <RadioButton name="transport" value="yes" label="Yes" />
          <RadioButton name="transport" value="no" label="No" />
          <RadioButton name="transport" value="idk" label="Not sure yet" />
        </InputField>
        <InputField
          label="Are you staying on Waiheke Island after the reception?"
          isRequired
          isQuestion
        >
          <RadioButton name="accommodation" value="yes" label="Yes" />
          <RadioButton name="accommodation" value="no" label="No" />
          <RadioButton name="accommodation" value="idk" label="Not sure yet" />
        </InputField>

        <Section title="Travel to Italy" icon="ribbon">
          <ThumbnailList thumbnails={thumbnails}></ThumbnailList>
        </Section>
        <Button type="secondary" text="ADD GUEST" icon="plus" />
      </Card>
      <Button type="primary" text="RSVP" icon="pen" />
      <Nav navItems={navItems}></Nav>
    </div>
  );
}
