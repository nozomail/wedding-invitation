import React from 'react';

import { Card } from '@components/Card';
import { Block } from '@components/Block';
import { Text } from '@components/Text';
import { Section } from '@components/Section';
import { ThumbnailList } from '@components/ThumbnailList';

import flight1Img from '@assets/images/honeymoon_flight1.jpg';
import colosseumImg from '@assets/images/honeymoon_colosseum.jpg';
import pantheonImg from '@assets/images/honeymoon_pantheon.jpg';
import vaticanImg from '@assets/images/honeymoon_vatican.jpg';
import carbonaraImg from '@assets/images/honeymoon_carbonara.jpg';
import pompiImg from '@assets/images/honeymoon_pompi.jpg';
import hotelinromeImg from '@assets/images/honeymoon_hotelinrome.jpg';
import duomoImg from '@assets/images/honeymoon_duomo.jpg';
import boutiqueImg from '@assets/images/honeymoon_boutique.jpg';
import pompeiImg from '@assets/images/honeymoon_pompei.jpg';
import pizzaImg from '@assets/images/honeymoon_pizza.jpg';
import calzoneImg from '@assets/images/honeymoon_calzone.jpg';
import hotelinnaplesImg from '@assets/images/honeymoon_hotelinnaples.jpg';
import amalfiImg from '@assets/images/honeymoon_amalfi.jpg';
import capriImg from '@assets/images/honeymoon_capri.jpg';
import bluegrottoImg from '@assets/images/honeymoon_bluegrotto.jpg';
import flight2Img from '@assets/images/honeymoon_flight2.jpg';

const plan1 = [
  {
    name: 'Flight',
    image: flight1Img,
  },
];

const plan2 = [
  {
    name: 'Colosseum',
    image: colosseumImg,
  },
  {
    name: 'Pantheon',
    image: pantheonImg,
  },
  {
    name: 'Vatican City',
    image: vaticanImg,
  },
  {
    name: 'La Carbonara',
    image: carbonaraImg,
  },
  {
    name: 'Best Tiramisu - Pompi',
    image: pompiImg,
  },
  {
    name: 'Honeymoon Hotel',
    image: hotelinromeImg,
  },
];

const plan3 = [
  {
    name: 'Duomo',
    image: duomoImg,
  },
  {
    name: 'Boutique Shopping',
    image: boutiqueImg,
  },
];

const plan4 = [
  {
    name: 'Pompei',
    image: pompeiImg,
  },
  {
    name: 'Napolitan Pizza',
    image: pizzaImg,
  },
  {
    name: "Calzone - Valento's Pizza and Hoagies",
    image: calzoneImg,
  },
  {
    name: '5-star Hotel',
    image: hotelinnaplesImg,
  },
];

const plan5 = [
  {
    name: 'Amalfi Coast',
    image: amalfiImg,
  },
  {
    name: 'Excursion to Capri',
    image: capriImg,
  },
  {
    name: 'Blue Grotto',
    image: bluegrottoImg,
  },
];

const plan6 = [
  {
    name: 'Flight',
    image: flight2Img,
  },
];

export function Honeymoon(): JSX.Element {
  return (
    <div className="Honeymoon">
      <Card title="Honeymoon Contribution">
        <Block type="bottom" size="lg">
          <Text>
            We are so excited to have our big day in the beautiful country, New Zealand! Please do
            not bring gifts as we will not be able to take them back to Japan with us. We know many
            of you are travelling a long way to attend our wedding and having you there is the
            greatest gift we could ask for. However, if you do wish to contribute in some other way,
            helping us on our honeymoon would be gratefully received.
          </Text>
        </Block>

        <Section title="BANK ACCOUNT INFO" icon="bank">
          <Block size="lg" isColor isBorder>
            <Text isCenter>NOZOMI HIRAI</Text>
            <Text isCenter>01-2345-6789-00</Text>
          </Block>
        </Section>

        <Block type="top" size="xl">
          <Text>Here's a snapshot of our Italian honeymoon plan!</Text>
        </Block>

        <Section title="TRAVEL TO ITALY" icon="ribbon">
          <ThumbnailList thumbnails={plan1} />
        </Section>

        <Section title="4 NIGHTS IN ROME" icon="ribbon">
          <ThumbnailList thumbnails={plan2} />
        </Section>

        <Section title="DAY TRIP TO FLORENCE" icon="ribbon">
          <ThumbnailList thumbnails={plan3} />
        </Section>

        <Section title="2 NIGHTS IN NAPLES" icon="ribbon">
          <ThumbnailList thumbnails={plan4} />
        </Section>

        <Section title="2 NIGHTS ON THE AMALFI COAST" icon="ribbon">
          <ThumbnailList thumbnails={plan5} />
        </Section>

        <Section title="TRAVEL BACK HOME" icon="ribbon">
          <ThumbnailList thumbnails={plan6} />
        </Section>
      </Card>
    </div>
  );
}
