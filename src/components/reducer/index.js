import { combineReducers } from "redux";
import authedUser from "./authUserReducer";
import learningCycle from "./learningCycleReducer";
import user from "./usersReducer"
import task from './tasksReducer'


export default combineReducers({
  authedUser,
  learningCycle,
  user,
  task
});