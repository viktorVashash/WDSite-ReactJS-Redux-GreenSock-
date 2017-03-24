import { ACTIONS } from '../constants/index';

export default function (state = 1, action) {
  switch (action.type) {
    case ACTIONS.MOVE_TO_INDEX:
      return action.payload;
    default:
      return state;
  }
};
