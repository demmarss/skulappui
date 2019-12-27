import socketIOClient from "socket.io-client";

const baseUrl = 'ws://localhost:5000';

//  const baseUrl = 'ws://olisiticlms.com/api';

let socket = socketIOClient(baseUrl)

export function connectingToSocket(){
  socket.on('changeColor', async (kids) => {
    // console.log('Connected to socket retrieving response', result)

  })        
}

export function emitingToSocket(kids){
  socket.emit('changeColor', kids)        
}