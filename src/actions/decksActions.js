import {
  getDecks, addNewDeck, getDeck, addNewCard,
} from '../utils/decksDataUtils';
import {
  ACTIVATE_DECKS_LOADING_STATE,
  FETCH_DECKS_SUCCESS,
  FETCH_DECK_SUCCESS,
} from '../constants/actionTypes';

const activateDecksLoadingState = () => ({ type: ACTIVATE_DECKS_LOADING_STATE });

const fetchDecksSuccess = decks => ({ type: FETCH_DECKS_SUCCESS, decks });

const fetchDecksRequest = () => async (dispatch) => {
  dispatch(activateDecksLoadingState());

  try {
    const decks = await getDecks();
    dispatch(fetchDecksSuccess(decks));
  } catch (err) {
    console.log(err);
  }
};

const addNewDeckRequest = title => async (dispatch) => {
  try {
    await addNewDeck(title);
    dispatch(fetchDecksRequest());
  } catch (err) {
    console.log(err);
  }
};

const fetchDeckSuccess = deck => ({ type: FETCH_DECK_SUCCESS, deck });

const fetchDeckRequest = id => async (dispatch) => {
  dispatch(activateDecksLoadingState());

  try {
    const deck = await getDeck(id);
    dispatch(fetchDeckSuccess(deck));
  } catch (err) {
    console.log(err);
  }
};

const addNewCardRequest = (card, deckId) => async (dispatch) => {
  try {
    await addNewCard(card, deckId);
    dispatch(fetchDecksRequest());
  } catch (err) {
    console.log(err);
  }
};

export {
  fetchDecksRequest, addNewDeckRequest, fetchDeckRequest, addNewCardRequest,
};
