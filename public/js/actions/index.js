import { ACTIONS } from '../constants/index';

export function moveToIndex(index) {
  return {
    type: ACTIONS.MOVE_TO_INDEX,
    payload: index
  };
}

export function menu(menuStatus) {
  return {
    type: ACTIONS.MENU,
    payload: menuStatus
  };
}
