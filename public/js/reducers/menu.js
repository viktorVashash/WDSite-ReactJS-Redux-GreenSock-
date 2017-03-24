import { ACTIONS } from '../constants/index';

export default function(state = false, action) {
  switch (action.type) {
    case ACTIONS.MENU:
      return state = action.payload;
    default:
      return state;
  }
}
