import { AsyncStorage } from 'react-native';

import { DECKS_KEY } from '../constants/keys';
import { generateUID } from './dataGeneratorUtils';

// const dummyData = JSON.stringify([
//   {
//     id: generateUID(),
//     title: 'React',
//     questions: [
//       {
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces',
//       },
//       {
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event',
//       },
//     ],
//   },
//   {
//     id: generateUID(),
//     title: 'JavaScript',
//     questions: [
//       {
//         question: 'What is a closure?',
//         answer:
//           'The combination of a function and the lexical environment within which that function was declared.',
//       },
//     ],
//   },
// ]);

const getDecks = () => new Promise(async (res) => {
  const data = await AsyncStorage.getItem(DECKS_KEY);
  const decks = JSON.parse(data) || [];

  setTimeout(() => {
    res([...decks]);
  }, 1000);
});

const getDeck = id => new Promise(async (res) => {
  const decks = await AsyncStorage.getItem(DECKS_KEY);
  const deck = decks.find(deck => deck.id === id);
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

export { getDecks, getDeck, addNewDeck };
