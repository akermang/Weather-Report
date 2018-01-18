import { combineReducers } from 'redux';
import exampleReducer from './state/example/example.reducer';

const rootReducer = combineReducers({
  exampleReducer,
});

export default rootReducer;