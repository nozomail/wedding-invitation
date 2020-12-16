import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '@components/Card';
import { Section } from '@components/Section';
import { IndentSection } from '@components/IndentSection';
import { TextLink } from '@components/TextLink';
import { Text } from '@components/Text';
import { HelperText } from '@components/HelperText';
import { Block } from '@components/Block';
import { Button } from '@components/Button';
import { Map } from '@components/Map';

export function Venue(): JSX.Element {
  return (
    <div className="Venue">
      <Card title="Venue Info & Map">
        <Section title="MUDBRICK VINEYARD & RESTAURANT" icon="grape">
          <IndentSection title="PHONE">
            <TextLink url="tel:+6493729050" icon="phone">
              +64 9 372 9050
            </TextLink>
          </IndentSection>
          <IndentSection title="ADDRESS">
            <TextLink url="https://goo.gl/maps/CLfGz6X3tikkYNMC7" icon="map">
              126 Church Bay Road, Oneroa, Waiheke, New Zealand
            </TextLink>
          </IndentSection>
          <IndentSection title="EMAIL">
            <TextLink url="mailto:info@mudbrick.co.nz" icon="email">
              info@mudbrick.co.nz
            </TextLink>
          </IndentSection>
          <Map url="https://www.google.com/maps?ll=-36.787501,174.999783&amp;cid=10255568827358387453&amp;z=15&amp;t=m&amp;output=embed" />
        </Section>

        <Section title="FERRY FROM AUCKLAND" icon="grape">
          <Text>
            Fullers ferry to Waiheke Island can be very busy during this time. There may be delays
            and crowding. We recommend buying tickets at the ticket kiosk in person well before the
            scheduled departure time or online in advance.
          </Text>
          <Text>
            Please show the invitation page of this website to the Fullers staff to get a 10%
            discount. (Discount is not available for online purchase)
          </Text>
          <Block type="vertical" size="sm">
            <IndentSection title="TIMETABLE">
              <TextLink
                url="https://www.fullers.co.nz/timetables-and-fares/?from=AUCK&to=WAIH"
                icon="arrow"
              >
                Fullers & 360 Discovery
              </TextLink>
            </IndentSection>
          </Block>
          <HelperText>Please check the public holiday timetable from the above link.</HelperText>
          <Map url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.978766159694!2d174.764746750548!3d-36.842984586790635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f92371a817%3A0x77a08a068fe8dc0c!2sDowntown%20Ferry%20Terminal!5e0!3m2!1sen!2snz!4v1605238382935!5m2!1sen!2snz" />
        </Section>

        <Section title="WAIHEKE FERRY TERMINAL TO MUDBRICK" icon="grape">
          <Text>
            A bus has been booked to transport guests from Waiheke Ferry Terminal to Mudbrick at
            3.50 pm (or the arrival time of the 3.00 pm ferry from Auckland). If you would prefer to
            take a different means of transportation, please arrange this on your own.
          </Text>
          <Block type="top" size="sm">
            <IndentSection title="WALKING">
              <Text>Takes approximately 30 – 40 minutes via the road.</Text>
            </IndentSection>
            <IndentSection title="TAXI">
              <Text>
                Often busy during this time. Please enquire if you need to book in advance.
              </Text>
              <Block type="top" size="sm">
                <TextLink url="tel:0800372200" icon="phone">
                  Waiheke Executive Transport
                </TextLink>
                <TextLink url="tel:0800924222" icon="phone">
                  WaiCabs
                </TextLink>
                <TextLink url="tel:0275050510" icon="phone">
                  Waiheke Five-O
                </TextLink>
              </Block>
            </IndentSection>
          </Block>
          <Map url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25564.768794170166!2d174.9808681!3d-36.7802558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d72cb99c337c327%3A0x2962952677981116!2sWaiheke%20Ferry%20Terminal!5e0!3m2!1sen!2snz!4v1605240009294!5m2!1sen!2snz" />
        </Section>
      </Card>

      <Block type="top" size="lg" justifyContent="center">
        <Link to="/rsvp">
          <Button color="primary" icon="pen">
            RSVP
          </Button>
        </Link>
      </Block>
    </div>
  );
}
