import React from 'react';
import './style.scss';
import { Card } from '../../components/Card';
import { Section } from '../../components/Section';
import { IndentSection } from '../../components/IndentSection';
import { TextLink } from '../../components/TextLink';
import { Button } from '../../components/Button';
import { Nav } from '../../components/Nav';

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
        <Button type="secondary" text="ADD GUEST" icon="plus" />
      </Card>
      <Button type="primary" text="RSVP" icon="pen" />
      <Nav navItems={navItems}></Nav>
    </div>
  );
}
