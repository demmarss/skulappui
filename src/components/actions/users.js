import { createUser, gettingUser, gettingListOfUsers, gettingUsers, createUserAndAddToLearningGroup } from '../service/api'
import { receiveLgroups } from './learningCycle';

export const GET_USER = "GET_USER";
export const CREATE_USER = "CREATE_USER";
export const DELETE_USER = "DELETE_USER";
export const GET_LIST_OF_USERS="GET_LIST_OF_USERS";
export const GETUSERS="GETUSERS";

export function getUser(userId) {
  return {
    type: GET_USER,
    userId
  };
}

export function getUsers(users) {
  return {
    type: GETUSERS,
    users
  };
}

export function getListOfUsers(users) {
  return {
    type: GET_LIST_OF_USERS,
    users
  };
}

export function addUser(user) {
  return {
    type: CREATE_USER,
    user
  };
}


export function deleteUser(userId) {
    return {
      type: DELETE_USER,
      userId
    };
  }

// creating handler that will be invoked in the UI 
export function handleCreateUser(user) {
    return (dispatch) => {
      // invoke api method    
      return createUser({
        user
      })
      // calling action through dispatch and assigning it to username
        .then((user) => dispatch(addUser(user)));
    };
  }


///////////////////////////////////////////////

// creating handler that will be invoked in the UI 
export function handleCreateUserAndAddToLearningGroup(user) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const { token} = authedUser? authedUser:{token:""}
  return createUserAndAddToLearningGroup({
    user,
    token
    })
      .then(({user, lgroups}) => {
        dispatch(addUser(user));
        dispatch(receiveLgroups(lgroups))
      })
      };
}

///////////////////////////////////////////////



export function handleGetUser(userId) {
    return (dispatch) => {
          
      return gettingUser({
        userId
      })
        .then(({userId}) => dispatch(getUser(userId)));
    };
  }

  export function handlingGetListOfUsers(userIdArray) {
    return (dispatch) => {
          
      return gettingListOfUsers({
        userIdArray
      })
        .then((users) => dispatch(getListOfUsers(users)));
    };
  }

  export function handlingGetUsers() {
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token } = authedUser? authedUser:{token:""}
      return gettingUsers(token)
        .then((users) => dispatch(getUsers(users)));
    };
  }
