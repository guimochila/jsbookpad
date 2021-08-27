import { RootState } from './index';
import produce, { Draft } from 'immer';

import { ActionType } from '../action-types';
import { Action } from '../actions';
import { ICell } from '../types';

interface ICellsState {
  readonly loading: boolean;
  readonly error: string | null;
  readonly order: string[];
  readonly data: {
    [key: string]: ICell;
  };
}

const initialState: ICellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

/* Selectors */
export const cellsSelector = ({ cells }: RootState) =>
  cells.order.map((id) => cells.data[id]);

const reducer = produce(
  (state: Draft<ICellsState> = initialState, action: Action): ICellsState => {
    switch (action.type) {
      case ActionType.SAVE_CELLS_ERROR:
        state.error = action.payload;

        return state;
      case ActionType.FETCH_CELLS:
        state.loading = true;
        state.error = null;

        return state;
      case ActionType.FETCH_CELLS_COMPLETE:
        state.order = action.payload.map((cell) => cell.id);
        state.data = action.payload.reduce((acc, cell) => {
          acc[cell.id] = cell;
          return acc;
        }, {} as ICellsState['data']);
        return state;
      case ActionType.FETCH_CELLS_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case ActionType.UPDATE_CELL:
        const { id, content } = action.payload;
        state.data[id].content = content;
        return state;
      case ActionType.DELETE_CELL:
        delete state.data[action.payload];
        state.order = state.order.filter((id) => id !== action.payload);
        return state;
      case ActionType.MOVE_CELL:
        const { direction } = action.payload;
        const index = state.order.findIndex((id) => id === action.payload.id);
        const targetIndex = direction === 'up' ? index - 1 : index + 1;

        if (targetIndex < 0 || targetIndex > state.order.length - 1) {
          return state;
        }

        state.order[index] = state.order[targetIndex];
        state.order[targetIndex] = action.payload.id;

        return state;
      case ActionType.INSERT_CELL_AFTER: {
        const cell: ICell = {
          content: '',
          type: action.payload.type,
          id: randomId(),
        };

        state.data[cell.id] = cell;
        const index = state.order.findIndex((id) => id === action.payload.id);

        if (index < 0) {
          state.order.unshift(cell.id);
        } else {
          state.order.splice(index + 1, 0, cell.id);
        }

        return state;
      }
      default:
        return state;
      // throw new Error(`Action type not defined.`);
    }
  },
  initialState,
);

const randomId = () => Math.random().toString(36).substr(2, 5);

export default reducer;
