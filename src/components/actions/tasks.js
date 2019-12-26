import { createTask, createAssignLgroup, createRemoveAssignLgroup, addingAudioResponseToTask, 
  addingScoreHistoryToTasksSecond, createOptionTaskWithImages, createTaskWithImage1, 
  gettingTask, receivingTasks, addingScoreHistoryToTasks, deletingTask, createTaskMainInfo } from '../service/api'
import { receiveLgroups, deleteTaskInLgroup, unAssignTaskInLgroup, assignTaskInLgroup } from './learningCycle'

export const GET_TASK = "GET_TASK";
export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const ADD_SCORE_HISTORY ="ADD_SCORE_HISTORY"
export const ADD_FILES = "ADD_FILES"
export const ADD_ANSWER_HISTORY = "ADD_ANSWER_HISTORY"
export const ASSIGN_LGROUP = "ASSIGN_LGROUP"



export function getTask(taskId) {
  return {
    type: GET_TASK,
    taskId
  };
}

export function addTask(task) {
    return {
      type: CREATE_TASK,
      task
    };
  }

export function assignLgroup(task){
  return{
    type: ASSIGN_LGROUP,
    task
  }
}

export function receiveTasks(tasks) {
    return {
      type: RECEIVE_TASKS,
      tasks
    };
  }


export function addScoreHistory(tasks) {
    return {
      type: ADD_SCORE_HISTORY,
      tasks
    };
  }

  export function addAnswerHistory(task) {
    return {
      type: ADD_ANSWER_HISTORY,
      task
    };
  }

  
export function deleteTask(task) {
    return {
      type: DELETE_TASK,
      task
    };
  }

export function addFiles(task) {
    return {
      type: ADD_FILES,
      task
    };
  }







// handler for deleting a learning group
export function handleDeleteTask(taskId){
  return (dispatch, getState)=>{
    const { authedUser }= getState();
    const { token } = authedUser? authedUser:{todken:""}
    return deletingTask({
      taskId,
      token
    })
    .then((task)=> { 
      dispatch(deleteTask(task))
      if(task.lgroupId !=="") dispatch(deleteTaskInLgroup(task))
      }) // this is the deleted task
  }
}
// handler for creating task
  export function handleCreateTask(task, lgroupId) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token } = authedUser? authedUser:{token:""}
    return createTask({
      task,
      token,
      lgroupId
       })
      .then(({task, lgroups}) => {
        dispatch(addTask(task));
        dispatch(receiveLgroups(lgroups))
      })
    }
  }

  // handler for creating task
  export function handleCreateTaskMainInfo(taskMainInfo) {
    console.log('To be sent to API service....', taskMainInfo)
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token } = authedUser? authedUser:{token:""}
    return createTaskMainInfo({
      taskMainInfo,
      token
       })
      .then(({task}) => {
        dispatch(addTask(task));
      })
    }
  }

   
// handler for creating task
export function handleCreateTaskWithImage1(formData) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const { token } = authedUser? authedUser:{token:""}
  return createTaskWithImage1({
    formData,
    token,
     })
    .then(({task}) => {
      dispatch(addFiles(task))
    })
  }
}
  // Generate Options for TaskWithImages
  export function handleAddOptionToTask(taskId){
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token } = authedUser? authedUser:{token:""}
    return createOptionTaskWithImages({
      taskId,
      token,
       })
      .then(({task}) => {
        dispatch(addFiles(task))
      })
    }
  }

  // Creating a prototype task , when it is
  export function handleAssignLgroup(taskId, lgroupId){
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token } = authedUser? authedUser:{token:""}
    return createAssignLgroup({
      taskId,
      lgroupId,
      token,
       })
       .then(({task, lgroup}) => {
         dispatch(assignLgroup(task));
         dispatch(assignTaskInLgroup(task, lgroup))
       })
     }
   }

   // Remove assignedLg from Task
   export function handleRemoveAssignLgroup(taskId, lgroupId){
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token } = authedUser? authedUser:{token:""}
    return createRemoveAssignLgroup({
      taskId,
      lgroupId,
      token,
       })
       .then(({task, lgroup}) => {
         dispatch(assignLgroup(task));
         dispatch(unAssignTaskInLgroup(task, lgroup))
       })
     }
   }

  // Receive Tasks list of a user
  export function handleReceiveTasks(userId){
    return (dispatch, getState) => {
      const { authedUser } = getState();
      const { token} = authedUser? authedUser:{token:""}
 
    return receivingTasks({
      userId,
      token
      })
    // calling action through dispatch and assigning it to username
      .then((tasks) => dispatch(receiveTasks(tasks)));
   };
  }

    // Receive Tasks list of a user
    export function handleAddScoreHistory(taskyId, timeDuration, correctedQuestionArray){
      return (dispatch, getState) => {
        const { authedUser } = getState();
        const { token } = authedUser? authedUser:{token:""}
   
      return addingScoreHistoryToTasks({
        taskyId,
        timeDuration,
        correctedQuestionArray,
        token
        })
      // calling action through dispatch and assigning it to username
        .then((tasks) => dispatch(addScoreHistory(tasks)));
     };
    }

    export function handleAddScoreHistorySecond(studentId, taskyId, correctedQuestionArray){
      return (dispatch, getState) => {
        const { authedUser } = getState();
        const { token } = authedUser? authedUser:{token:""}
   
      return addingScoreHistoryToTasksSecond({
        taskyId,
        studentId,
        correctedQuestionArray,
        token
        })
      // calling action through dispatch and assigning it to username
        .then((tasks) => dispatch(addScoreHistory(tasks)));
     };
    }

    

  export function handleAddAudioResponses(taskyId, fd){
      return (dispatch, getState) => {
        const { authedUser } = getState();
        const { token } = authedUser? authedUser:{token:""}
   
      return addingAudioResponseToTask({
        taskyId,
        fd,
        token
          })
      // calling action through dispatch and assigning it to username
        .then((task) => dispatch(addAnswerHistory(task)));
     };
    }
    
  
export function handleGetTask(taskId) {
    return (dispatch) => {
          
      return gettingTask({
        taskId
      })
        .then(({taskId}) => dispatch(getTask(taskId)));
    };
  }

