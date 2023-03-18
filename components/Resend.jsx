import React, { useState } from 'react'
import { useContext,useEffect } from 'react'
import { generateotp } from './generateotp';
import {Context} from '../components/context/CreateContext'
import Sendmail from '../components/mail/Sendmail'
export default function Resend({setStop}) {
 const {userdata,setUserData}=useContext(Context);
 const [check,setCheck]=useState(false)
 const handleresend= ()=>{
    setUserData({...userdata,code:Math.floor(generateotp())})
    setCheck(true)
  }
 const sendmail=async ()=>{
  await Sendmail(userdata)
 }
if(check){
  sendmail()
  setCheck(false)
  setStop(false)
}

   return(
    <span onClick={handleresend} className='text-blue-500 my-4 underline cursor-pointer'>Resend</span>
   )
}