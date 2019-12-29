import { createLgroup, receivingLgroups, joinLgroup, gettingLgroup, deletingLgroup, receivingAllLgroups } from '../service/api'

export const GET_GROUP = "GET_GROUP";
export const RECEIVE_LGROUPS = "RECEIVE_LGROUPS";
export const CREATE_LCYCLE = "CREATE_LCYCLE";
export const DELETE_LCYCLE = "DELETE_LCYCLE";
export const UPDATE_LGROUPS = 'UPDATE_LGROUPS';
export const DELETE_TASK_FROM_LCYCLE = 'DELETE_TASK_FROM_LCYCLE'
export const UNASSIGN_TASK_FROM_LCYCLE = 'UNASSIGN_TASK_FROM_LCYCLE'
export const ASSIGN_TASK_FROM_LCYCLE = 'ASSIGN_TASK_FROM_LCYCLE'

export function getLGroup(lgroupId) {
  return {
    type: GET_GROUP,
    lgroupId
  };
}

export function receiveLgroups(lgroups) {
  return {
    type: RECEIVE_LGROUPS,
    lgroups
  };
}


export function addLGroup(lgroup) {
  return {
    type: CREATE_LCYCLE,
    lgroup
  };
}

export function deleteLCycle(lgroupId) {
    return {
      type: DELETE_LCYCLE,
      lgroupId
    };
  }

  export function deleteTaskInLgroup(task){
    return{
      type: DELETE_TASK_FROM_LCYCLE,
      task
    }
  }

  export function unAssignTaskInLgroup(task, lgroup){
    return{
      type: UNASSIGN_TASK_FROM_LCYCLE,
      task, 
      lgroup
    }
  }

  export function assignTaskInLgroup(task, lgroup){
    return{
      type: ASSIGN_TASK_FROM_LCYCLE,
      task, 
      lgroup
    }
  }

  
  

// handler for deleting a learning group
export function handleDeleteLgroup(lgroupId){
  return (dispatch, getState)=>{
    const { authedUser }= getState();
    const { token } = authedUser? authedUser:{todken:""}
    return deletingLgroup({
      lgroupId,
      token
    })
    .then((lgroupId)=> dispatch(deleteLCycle(lgroupId)))
  }
}



// creating handler that will be invoked in the UI 
export function handleCreateLgroup(lgtitle) {
  return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token} = authedUser? authedUser:{token:""}
    return createLgroup({
      lgtitle,
      token
    })
    // calling action through dispatch and assigning it to username
      .then((lgroups) => dispatch(addLGroup(lgroups)));
  };
}

export function handleJoinLgroup(lgCode){
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token} = authedUser? authedUser:{token:""}
    return joinLgroup({
      lgCode,
      token
    })
    // calling action through dispatch and assigning it to username
      .then((lgroup) => dispatch(receiveLgroups(lgroup)));
  };
}


// get Lgroups for this user
export function handleReceiveLgroups(userId){
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const { token} = authedUser? authedUser:{token:""}
  return receivingLgroups({
    userId,
    token
  })
  // calling action through dispatch and assigning it to username
    .then((lgroups) => dispatch(receiveLgroups(lgroups)));
};
}

// get Lgroups for this user
export function handleReceiveAllLgroups(){
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const { token} = authedUser? authedUser:{token:""}
  return receivingAllLgroups({
    token
  })
  // calling action through dispatch and assigning it to username
    .then((lgroups) => dispatch(receiveLgroups(lgroups)));
};
}


export function handleGetLgroup(lgroupId) {
  return (dispatch) => {
        
    return gettingLgroup({
      lgroupId
    })
      .then(lgroup => dispatch(getLGroup(lgroup)));
  };
}
