import { RootState } from './../reducers/index';
import { saveCells } from './../action-creators/index';
import { ActionType } from './../action-types/index';
import { Dispatch } from 'redux';
import { Action } from '../actions';

export const persistMiddleware = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch<Action>;
  getState: () => RootState;
}) => {
  let timer: NodeJS.Timer;

  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);

      if (
        [
          ActionType.MOVE_CELL,
          ActionType.UPDATE_CELL,
          ActionType.INSERT_CELL_AFTER,
          ActionType.DELETE_CELL,
        ].includes(action.type)
      ) {
        if (timer) {
          clearTimeout(timer);
        }

        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
        }, 300);
      }
    };
  };
};
