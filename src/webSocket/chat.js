import socketIOClient from "socket.io-client";

const baseUrl = 'ws://localhost:5000';

//  const baseUrl = 'ws://olisiticlms.com/ws';

let socket = socketIOClient(baseUrl)

export function connectingToSocket(){
  socket.on('changeColor', async (kids) => {
  })        
}

export function emitingToSocket(kids){
  socket.emit('changeColor', kids)        
}