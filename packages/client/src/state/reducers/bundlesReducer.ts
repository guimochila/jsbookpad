import { RootState } from './index';
import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface IBundleState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        error: string;
      }
    | undefined;
}

/* Selectors */
export const bundleSelector = ({ bundles }: RootState, cellId: string) =>
  bundles[cellId];

const initialState: IBundleState = {};

const reducer = produce(
  (state: IBundleState = initialState, action: Action): IBundleState => {
    switch (action.type) {
      case ActionType.BUNDLE_START: {
        state[action.payload.cellId] = {
          loading: true,
          code: '',
          error: '',
        };

        return state;
      }
      case ActionType.BUNDLE_COMPLETE: {
        state[action.payload.cellId] = {
          loading: false,
          code: action.payload.bundle.code,
          error: action.payload.bundle.error,
        };
        return state;
      }
      default: {
        return state;
      }
    }
  },
  initialState,
);

export default reducer;
