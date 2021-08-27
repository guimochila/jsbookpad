import { combineReducers } from 'redux';
import cellsReducers from './cellsReducer';
import bundlesReducers from './bundlesReducer';

const reducers = combineReducers({
  cells: cellsReducers,
  bundles: bundlesReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
