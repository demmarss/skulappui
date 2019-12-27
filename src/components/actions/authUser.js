import { loginUser } from '../service/api'

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function setAuthedUser(username, _id, token, role, affiliationId) {
  return {
    type: SET_AUTHED_USER,
    username,
    _id,
    token,
    role,
    affiliationId
  };
}

export function logoutUser(userId) {
  return {
    type: LOGOUT_USER,
    userId
  };
}


export function handleSetAuthedUser(username, password) {
  return (dispatch) => {
        
    return loginUser({
      username, 
      password
    })
      .then(({username, _id, token, role, affiliationId}) => dispatch(setAuthedUser(username, _id, token, role, affiliationId))
      
      );
  };
}
