import { getDecks, addNewDeck } from '../utils/decksDataUtils';
import { ACTIVATE_DECKS_LOADING_STATE, FETCH_DECKS_SUCCESS } from '../constants/actionTypes';

const activateDecksLoadingState = () => ({ type: ACTIVATE_DECKS_LOADING_STATE });

const fetchDecksSuccess = decks => ({ type: FETCH_DECKS_SUCCESS, decks });

const fetchDecksRequest = () => async (dispatch) => {
  dispatch(activateDecksLoadingState());

  try {
    const decks = await getDecks();
    console.log(decks);
    dispatch(fetchDecksSuccess(decks));
  } catch (err) {
    console.log(err);
  }
};

const addNewDeckRequest = title => async (dispatch) => {
  dispatch(activateDecksLoadingState());

  try {
    await addNewDeck(title);
    dispatch(fetchDecksRequest());
  } catch (err) {
    console.log(err);
  }
};

export { fetchDecksRequest, addNewDeckRequest };
