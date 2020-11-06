import React from 'react';
import './style.scss';
import { Card } from '../../components/Card';
import { Section } from '../../components/Section';
import { IndentSection } from '../../components/IndentSection';

export function App(): JSX.Element {
  return (
    <div className="App">
      <Card title="Venue Info & Map">
        <Section title="MUDBRICK VINEYARD & RESTAURANT" icon="grape">
          <IndentSection title="PHONE">
            +64 9 372 9050
          </IndentSection>
          <IndentSection title="TITLE">
            126 Church Bay Road, Oneroa, Waiheke, New Zealand
          </IndentSection>
          <IndentSection title="EMAIL">
            info@mudbrick.co.nz
          </IndentSection>
        </Section>
      </Card>
    </div>
  );
}
