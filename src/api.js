import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4001';

// axios.defaults.baseURL = 'http://olisiticlms.com/api';


axios.defaults.headers.post['Content-Type'] = 'application/json';

// Get users
export async function getUsers() {
    const response = await axios.get(`/users`);
     return response.data;
  }

// Creater user
export async function createUser(user) {
    const response = await axios.post(`/users`, user);
     return response.data;
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

  // Get all lcycles
export async function getLcycles() {
  const response = await axios.get(`/lcycle`);
   return response.data;
}


// Create learning cycle
export async function createLcycle(lcycle) {
  console.log(lcycle)
  const response = await axios.post(`/lcycle`, lcycle);
  return response.data;
}

// Join lcycle
export async function joinLcycle(userId) {
  const response = await axios.put(`/lcycle`, userId);
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