import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import informationReducer from './reducers';

const store = createStore(
  informationReducer,
  composeWithDevTools()
);

export default store;
