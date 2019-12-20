import React, { useEffect, useState } from 'react'
import { connectingToSocket } from '../../webSocket/chat'

import socketIOClient from "socket.io-client";
const baseUrl = 'ws://localhost:4001';
// URL = 'http://olisiticlms.com/api';
let socket = socketIOClient(baseUrl)



export default function ClassPU ({Status}){
    const [kids, setKids]=useState([])

    useEffect(()=>{
        socket.on('changeColor', (result) => {
            setKids([...kids, ...result ])
          })
    })

    console.log("Childreen here", kids)
     
    function getKidsByGrade(grade){
        const kidByGrade = kids.filter(kid=> kid.grade === grade)
        return kidByGrade
    }

    return(
        <div>
            {Status}
            <section className="box container">
  <div className="hero-body">
      List of Student ready for pickUp
      {getKidsByGrade(Status).map(kid => 
          <p className='title is-4 box' key={kid.code}>
              {kid.name}
          </p>
                )}

      </div>
      </section>



        </div>
    )
}