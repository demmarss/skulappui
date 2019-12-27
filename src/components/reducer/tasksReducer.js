import { GET_TASK, CREATE_TASK, DELETE_TASK, RECEIVE_TASKS, ASSIGN_LGROUP, ADD_SCORE_HISTORY, ADD_FILES, ADD_ANSWER_HISTORY} from "../actions/tasks";

export default function task(state = [], action) {
  switch (action.type) {
    case RECEIVE_TASKS:
      return action.tasks.filter(x => x) 

    case ADD_SCORE_HISTORY:
      return action.tasks
    
    case ADD_ANSWER_HISTORY:
      return [...state.filter(x => x._id !== action.task._id), action.task]

    case ADD_FILES:
      return [action.task]
    
    case ASSIGN_LGROUP:
      return [...state.filter(x => x._id !== action.task._id), action.task]

    case GET_TASK:
      return {
        ...state,
        ...action.taskId
      }

    case DELETE_TASK:
      return (state.length> 0)? state.filter(x => x._id !== action.task._id): null

    case CREATE_TASK:
      return [action.task]
    default:
      return state;
  }
}
