import { AsyncStorage } from 'react-native';

import { DECKS_KEY } from '../constants/keys';

const getDecks = () => new Promise(res => AsyncStorage.getItem(DECKS_KEY).then(decks => setTimeout(() => res(decks), 1000)));

const getDeck = id => new Promise(res => AsyncStorage.getItem(DECKS_KEY).then((decks) => {
  const deck = decks.find(d => d.id === id);
  setTimeout(() => {
    res(deck);
  }, 1000);
}));

export { getDecks, getDeck };
