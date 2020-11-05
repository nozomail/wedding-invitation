import React from 'react';
import './style.scss';
import { Card } from '../../components/Card';
import { Section } from '../../components/Section';

export function App(): JSX.Element {
  return (
    <div className="App">
      <Card title="Venue Info & Map">
        <Section title="MUDBRICK VINEYARD & RESTAURANT" icon="grape">
          PHONE: +64 9 372 9050<br />
          ADDRESS: 126 Church Bay Road, Oneroa, Waiheke, New Zealand<br />
          EMAIL: info@mudbrick.co.nz
        </Section>
      </Card>
    </div>
  );
}
