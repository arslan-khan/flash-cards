import { AsyncStorage } from 'react-native';

import { DECKS_KEY } from '../constants/keys';
import { generateUID } from './dataGeneratorUtils';

const getDecks = () => new Promise(async (res) => {
  const data = await AsyncStorage.getItem(DECKS_KEY);
  const decks = JSON.parse(data) || [];

  setTimeout(() => {
    res([...decks]);
  }, 1000);
});

const getDeck = id => new Promise(async (res) => {
  const decks = await AsyncStorage.getItem(DECKS_KEY);
  const deck = JSON.parse(decks).find(deck => deck.id === id);
  setTimeout(() => {
    res(deck);
  }, 1000);
});

const addNewDeck = async (title) => {
  const newDeck = {
    id: generateUID(),
    title,
    questions: [],
  };
  const existingDecks = await AsyncStorage.getItem(DECKS_KEY);
  let newDecks = [];

  if (!existingDecks) {
    newDecks = [...newDecks, newDeck];
  } else {
    newDecks = [...JSON.parse(existingDecks), newDeck];
  }

  return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(newDecks));
};

const addNewCard = async (card, deckId) => {
  const decks = await AsyncStorage.getItem(DECKS_KEY);
  const updatedDecks = JSON.parse(decks).map((deck) => {
    if (deck.id === deckId) {
      deck.questions.push(card);
      return deck;
    }
    return deck;
  });

  return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(updatedDecks));
};

export {
  getDecks, getDeck, addNewDeck, addNewCard,
};
