import axios from 'axios'
import jwt_decode from 'jwt-decode';


// const apiUrl = 'http://localhost:3001/api'

// export const apiUrlForImages = 'http://localhost:5000'
export const apiUrlForImages = 'http://olisiticlms.com/api'



// axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.baseURL = 'http://olisiticlms.com/api';

axios.defaults.headers.post['Content-Type'] = 'application/json';

// Creating a user
export async function createUser(user) {
        const response = await axios.post(`/users`, user);
        return response.data;
  }


  
// Creating a user
export async function createUserAndAddToLearningGroup({user}) {
   console.log('I invocked ..............')
   const response = await axios.post(`/users/byAdmin`, user);

   console.log('response....', response.data)
   return response.data;
  }

export async function gettingUsers(token) {
   console.log('I fired but not authorized')
   axios.defaults.headers['x-auth-token'] = token

   const response = await axios.get(`/users`);

   console.log('response here ...', response.data)
   return response.data;
}

export async function gettingUser(userId) {
    const response = await axios.get(`/users/me`, userId);
    return response.data;
 }

 
export async function gettingListOfUsers({userIdArray}) {
   const response = await axios.post(`/users/getManyUsers`, {userIdArray });
   return response.data;
 }
 
 

// Creating a Task and adding it to a learning group
export async function createTask({task, token, lgroupId}) {
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.post(`/tasks`, {task, lgroupId});
    return response.data;
 }

 export async function createTaskMainInfo({taskMainInfo, token}) {
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.post(`/tasks/creatTaskMainInfo`, {taskMainInfo});
    return response.data;
 }

 export async function createTaskWithImage1({formData, token}) {
   axios.defaults.headers['x-auth-token'] = token
   const response = await axios.post(`/tasks/saveImage1`, formData);
   return response.data;
}

 export async function createOptionTaskWithImages({taskId, token}) {
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.put(`/tasks/addOption`, {taskId});
    return response.data;
 }
 
 export async function createAssignLgroup({taskId, lgroupId, token}) {
    console.log("Task id Api", taskId)
   axios.defaults.headers['x-auth-token'] = token
   const response = await axios.put(`/tasks/assignLgroup`, {taskId, lgroupId });
   return response.data;
}


export async function createRemoveAssignLgroup({taskId, lgroupId, token}) {
  axios.defaults.headers['x-auth-token'] = token
  const response = await axios.put(`/tasks/removeAssignLgroup`, {taskId, lgroupId });
  return response.data;
}

 // To delete Lgroup
 export async function deletingLgroup({lgroupId, token}){
     axios.defaults.headers['x-auth-token']= token
     const response = await axios.delete(`/lgroups/${lgroupId}`)
     return response.data;
 }

 // To delete task
 export async function deletingTask({taskId, token}){
    axios.defaults.headers['x-auth-token']= token
    const response = await axios.delete(`/tasks/${taskId}`)
    return response.data; // this receives the deleted task
}


export async function gettingTask(taskId) {
    const response = await axios.get('/tasks', taskId);
       return response.data;
 }
  
// To create learning group
export async function createLgroup({lgtitle, token}) {
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.post(`/lgroups`, {lgtitle});
        console.log(response)
       return response.data; // response.data = object of learning group created
 }

 // Stident join Learning group
 export async function joinLgroup({lgCode, token}) {

    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.put(`/lgroups/${lgCode}`);
       return response.data; // this should be array of learning groups that the user belong
 }
 

// To get learning group
export async function gettingLgroup(lgroupId) {
    const response = await axios.get(`/lgroups/${lgroupId}`);

       return response.data; // this should be array of learning groups that the user belong
 }

 // To get learning groups
export async function receivingLgroups({userId, token}) {
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.get(`/lgroups/${userId}`);
       return response.data; // this should be array of learning groups that the user belong
 }

 // To get learning groups
export async function receivingAllLgroups({token}) {
   axios.defaults.headers['x-auth-token'] = token
   const response = await axios.get(`/lgroups`);
      return response.data; // this should be array of learning groups that the user belong
}

 

  // To get tasks of a user 
 export async function receivingTasks({userId, token}) {
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.get(`/tasks/${userId}`);
       return response.data; // this should be array of tasks from the classes that user belong
 }

 // To update task with answer from a specific user
 export async function addingScoreHistoryToTasks({taskyId, timeDuration, correctedQuestionArray, token}){
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.put(`/tasks/${taskyId}`, {taskyId, timeDuration, correctedQuestionArray})
    return response.data
 }

 
 // To update task with answer from a specific user
 export async function addingScoreHistoryToTasksSecond({studentId, taskyId, correctedQuestionArray, token}){
   axios.defaults.headers['x-auth-token'] = token
   const response = await axios.put(`/tasks/second/${taskyId}`, {studentId, taskyId, correctedQuestionArray})
   return response.data
}

 export async function addingAudioResponseToTask({taskyId, fd, token}){
   axios.defaults.headers['x-auth-token'] = token
   const response = await axios.put(`/tasks/addAudioResponse/${taskyId}`, fd)
   return response.data
}
 
 // To login User
export async function loginUser(user) {
    const response = await axios.post(`/auth`, user);
       const token = response.data
       const { username, _id, role, affiliationId } = decodeToken(token)
       return {username, _id, token, role, affiliationId} 
 }


// Get all time records
export async function getRecords() {
   const response = await axios.get(`/times`);
    return response.data;
 }

 
// Create Time record
export async function createTimeRecord(userId) {
   const response = await axios.post(`/times`, userId);
   return response.data;
 }

 // Get all payments
  export async function getPayments() {
   const response = await axios.get(`/payments`);
    return response.data;
 }
 
 
 // Create payment
 export async function createPayment(userId) {
   const response = await axios.post(`/payments`, userId);
   return response.data;
 }

   // Get all payments
   export async function getExpenses() {
     const response = await axios.get(`/expenses`);
      return response.data;
   }
    
   
   // Create payment
   export async function createExpenses(expense) {
     console.log('...api', expense)
     const response = await axios.post(`/expenses`, expense);

     return response.data;
   }


   // Get all schools
   export async function getSchools() {
      const response = await axios.get(`/schools`);
         return response.data;
      }
      
      
   // Create school
   export async function createSchool(formData) {
   const response = await axios.post(`/schools`, formData);
   return response.data;
      }


 // to decoed token
function decodeToken (token){
    const decoded = jwt_decode(token);
    return decoded
}
