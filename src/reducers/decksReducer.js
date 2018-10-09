import { initialState } from '../initialState/initialState';
import { ACTIVATE_DECKS_LOADING_STATE, FETCH_DECKS_SUCCESS } from '../constants/actionTypes';

const decksReducer = (state = initialState.decks, action) => {
  switch (action.type) {
    case ACTIVATE_DECKS_LOADING_STATE:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DECKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.decks,
      };

    default:
      return state;
  }
};

export default decksReducer;
