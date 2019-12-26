import { GET_USER, DELETE_USER, CREATE_USER, GET_LIST_OF_USERS, GETUSERS } from "../actions/users";

export default function user(state = [], action) {
  switch (action.type) {
    case GET_USER:
      return [...state, action.userId]
    case GETUSERS:
        return [...action.users]
        
    case GET_LIST_OF_USERS:
        return [...state, ...action.users]
    case DELETE_USER:
      return action.userId;

    case CREATE_USER:
      return [...state, action.user];
    default:
      return state;
  }
}