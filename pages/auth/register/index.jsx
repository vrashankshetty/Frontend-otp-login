import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
export default function index() {
  const [email,setEmail]=useState('')
  const [ref,setRef]=useState('@gmail.com');
  const [password,setPassword]=useState('')
  const router=useRouter()
  let user;
  useEffect(()=>{
   user=localStorage.getItem("user")
 },[user])
  const handlesubmit=()=>{
     {user && localStorage.removeItem("user")}
     localStorage.setItem("user",JSON.stringify({email:email+ref,password:password}))
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
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold">Welcome to Systempackage</div>
               
                <div className='bg-slate-100 w-full lg:w-3/4 flex flex-row justify-center mt-10 p-2 rounded-lg'>
                    <input type="text" className='w-1/2 bg-slate-100 h-10 p-2' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} />
                    <select name="email" id="ids" className='bg-white w-1/2' value={ref} onChange={e=>setRef(e.target.value)}>
                        <option value="@gmail.com<">@gmail.com</option>
                        <option value="@design.com">@design.com</option>
                        <option value="@yahoo.com">@yahoo.com</option>
                        <option value="@tech.com">@tech.com</option>
                    </select>
                </div>
                <div className='bg-slate-100 w-full lg:w-3/4 flex flex-row justify-center mt-10 p-2 rounded-lg'>
                    <input type="password" className='w-full bg-slate-100 h-10 p-2' placeholder='password' value={password} onChange={e=>setPassword(e.target.value)} />
                    
                </div>
                <div className='bg-blue-700 w-full lg:w-3/4 flex flex-row justify-center mt-10 p-2 rounded-lg'>
                    <Link href='/auth/'>
                    <button className='w-full bg-blue-700 text-white p-1' onClick={handlesubmit}>Next</button>
                    </Link>
                </div>
            </div>
            <div className="hidden md:flex mx-3 mt-3 p-4">
               Already a member?
        <Link href='/auth'>
        <span className= ' text-blue-600'> Login account</span>
        </Link>
    </div>
        </div>
        
    </div>
    
    </>
  )
}
