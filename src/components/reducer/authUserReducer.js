import { SET_AUTHED_USER, LOGOUT_USER } from "../actions/authUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action
    case LOGOUT_USER:
      return "";
    default:
      return state;
  }
}