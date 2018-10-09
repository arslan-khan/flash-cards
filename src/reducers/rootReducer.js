import { combineReducers } from 'redux';

import decks from './decksReducer';

const rootReducer = combineReducers({
  decks,
});

export default rootReducer;
