import React, { useState,useEffect } from 'react'

export default function Timer({stop,setStop}) {
  const [timer,setTimer]=useState(10)
  useEffect(()=>{
      if(timer === 1){
         setStop(true) 
      };
      const interval=setInterval(()=>{
       {!stop?setTimer((prev)=>prev-1):setTimer(0)}
      },1000)
      return ()=>clearInterval(interval)
  },[setStop,timer])
  return (
    (timer<10)?<span>0{timer}</span>:<span>{timer}</span>
  )
}
