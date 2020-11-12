import React from 'react';
import '../../styles/global.scss';

import { Card } from '@components/Card';
import { Section } from '@components/Section';
import { IndentSection } from '@components/IndentSection';
import { TextLink } from '@components/TextLink';
import { Button } from '@components/Button';

export function Venue(): JSX.Element {
  return (
    <div className="Venue">
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
      </Card>
      <Button type="primary" text="RSVP" icon="pen" />
    </div>
  );
}
