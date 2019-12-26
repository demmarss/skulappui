import {handleGetUser} from './users.js'
import {handleReceiveLgroups} from './learningCycle'
import {handleReceiveTasks} from './tasks'


export function getInitialData (userId){
    handleGetUser(userId)
    handleReceiveLgroups(userId)
    handleReceiveTasks(userId)
  }