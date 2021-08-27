import { persistMiddleware } from './middlewares/persist';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(persistMiddleware, thunk),
);
