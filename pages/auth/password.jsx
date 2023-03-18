import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
export default function index() {
  const [newpassword,setNewpassword]=useState('')
  const [confirmpassword,setConfirmpassword]=useState('')
  const [error,setError]=useState(false)
  const [user,setUser]=useState({});
  const router=useRouter()
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user")));
  },[])

  const handlesubmit=()=>{
     if(newpassword==confirmpassword){
        setError(false)
        localStorage.removeItem("user")
        localStorage.setItem("user",JSON.stringify({...user,password:newpassword}))
        router.push('/auth/')
     }else{
        setError(true)
     }
  }
  return (
    <>
    <div className='flex flex-row justify-between items-center'>
    <div className="m-6 p-4"><Image src='/img/Subtract.png' width="30" height="20" alt="noimg"/>
    </div>
    </div>
    <div className='flex w-full h-full '>
         <div className='flex-1 flex flex-col items-center justify-around m-8 space-y-3 h-full'>
            <div className="flex flex-col  items-center lg:my-10">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold">Change Password</div>
               
                <div className='bg-slate-100 w-full lg:w-3/4 flex flex-row justify-center mt-10 p-2 rounded-lg'>
                    <input type="password" className='w-full bg-slate-100 h-10 p-2' placeholder='New password' value={newpassword} onChange={e=>{setNewpassword(e.target.value),setError(false)}} />
                </div>
                <div className='bg-slate-100 w-full lg:w-3/4 flex flex-row justify-center mt-10 p-2 rounded-lg'>
                    <input type="password" className='w-full bg-slate-100 h-10 p-2' placeholder='Confirm password' value={confirmpassword} onChange={e=>{setConfirmpassword(e.target.value),setError(false)}} />
                    
                </div>
                <div className='bg-blue-700 w-full lg:w-3/4 flex flex-row justify-center mt-10 p-2 rounded-lg'>
                    <button className='w-full bg-blue-700 text-white p-1' onClick={handlesubmit}>Next</button>
                </div>
                 {error&&<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-2" role="alert">Wrong Password match!!
                </div>}
            </div>
        </div>
    </div>
    </>
  )
}