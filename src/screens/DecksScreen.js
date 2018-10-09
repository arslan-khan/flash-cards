import React from 'react';
import {
  Content, Card, Text, H1, H3,
} from 'native-base';

import { TOMATO } from '../constants/colors';

const data = [
  { id: 1, name: 'Deck 1', cards: 10 },
  { id: 2, name: 'Deck 2', cards: 4 },
  { id: 3, name: 'Deck 3', cards: 4 },
  { id: 4, name: 'Deck 4', cards: 4 },
  { id: 5, name: 'Deck 5', cards: 4 },
  { id: 6, name: 'Deck 6', cards: 4 },
  { id: 7, name: 'Deck 7', cards: 8 },
  { id: 8, name: 'Deck 8', cards: 2 },
];

const DecksScreen = () => (
  <Content padder>
    {data.map(d => (
      <Card key={d.id}>
        <Text style={{ textAlign: 'center', paddingTop: 30 }}>
          <H1>{d.name}</H1>
        </Text>
        <Text style={{ textAlign: 'center', paddingBottom: 20 }}>
          <H3>
            Total Cards:
            {d.cards}
          </H3>
        </Text>
      </Card>
    ))}
  </Content>
);

export default DecksScreen;
