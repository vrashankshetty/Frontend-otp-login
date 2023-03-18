import React, { useState , useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/index.module.css'
import Sendmail from '../../components/mail/Sendmail'
import {useRouter} from 'next/router'
import { useContext } from 'react'
import {Context} from '../../components/context/CreateContext'
import {generateotp} from '../../components/generateotp'
import {PulseLoader} from "react-spinners"
export default function index() {
  const [email,setEmail]=useState('')
  const [ref,setRef]=useState('@gmail.com');
  const [password,setPassword]=useState('')
  const [user,setUser]=useState(null)
  const [getuser,setGetuser]=useState('')
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)
  const {userdata,setUserData}=useContext(Context);
  const otp=generateotp()
  const router=useRouter();
  const u=userdata
  useEffect(()=>{
    if(user!==null){
        const sendmail=async()=>{
            await Sendmail(user);
            setUserData(user)
        }
        sendmail();
    }
    setGetuser(JSON.parse(localStorage.getItem("user")))
  },[user])

  const handlesubmit=(e)=>{
    e.preventDefault();
    if((email+ref)==getuser.email && password==getuser.password){
        setUser({
            to_email:email+ref,
            password:password,
            to_name:email,
            code:Math.floor(otp)
        })
        setLoading(true);
        setTimeout(()=>{
        setLoading(false);
        router.push('/auth/verify')
        },3000)
        setError(false)
        
        }else{setError(true)}
    }
  return (
    <>
    <div className='flex flex-row justify-between items-center'>
        <div className="m-6 p-4">
            <Image src='/img/Subtract.png' width="30" height="20" alt="noimg"/>
        </div>
        <div className="text-sm p-3 md:hidden">
            Not member?
            <Link href='/auth/register'>
            <span className= ' text-blue-600'> Create account</span>
            </Link>
        </div>
    </div>
    <div className='flex w-full h-full '>
        <div className='flex-1 flex flex-col items-center justify-around m-8 space-y-3 h-full'>
            <div className="flex flex-col  items-center lg:my-10">
             <div className="text-2xl md:text-3xl lg:text-4xl font-bold">Welcome to Systempackage</div>
               <div className='bg-slate-100 w-full lg:w-3/4 flex flex-row justify-center mt-10 p-2 rounded-lg'>
                    <input type="text" className='w-1/2 bg-slate-100 h-10 p-2' placeholder='email' value={email} onChange={e=>{setEmail(e.target.value),setError(false)}} />
                    <select name="email" id="ids" className='bg-white w-1/2' value={ref} onChange={e=>setRef(e.target.value)}>
                        <option value="@gmail.com<">@gmail.com</option>
                        <option value="@design.com">@design.com</option>
                        <option value="@yahoo.com">@yahoo.com</option>
                        <option value="@tech.com">@tech.com</option>
                    </select>
                </div>
                <div className='bg-slate-100 w-full lg:w-3/4 flex flex-row justify-center mt-10 p-2 rounded-lg'>
                    <input type="password" className='w-full bg-slate-100 h-10 p-2' placeholder='password' value={password} onChange={e=>{setPassword(e.target.value),setError(false)}} />
                    
                </div>
                <div className='bg-blue-700 w-full lg:w-3/4 flex flex-row justify-center mt-10 p-2 rounded-lg'>
                    {loading? <PulseLoader color="white" margin={9} size={13}/>:<button className='w-full bg-blue-700 text-white p-1' disabled={loading}  onClick={handlesubmit}>Next</button>}
                </div>
                {error&&<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-2" role="alert">Invalid username and password
                </div>}
                <Link href='/auth/password'>
                <div className='mt-6 text-blue-600 cursor-pointer'>
                    Forgot your password?   
                </div>
                </Link>
            </div>
        </div>
        <div className='hidden md:flex flex-1 p-3'>
            <div className='absolute z-2 ml-20'>
            <Image className={`${styles.bannerimg} ${styles.first}`} src='/img/Banner02.png' width='400' height='80'  alt="noimg"/>
            </div>
            <div className='absolute z-2 ml-10'>
            <Image className={`${styles.bannerimg} ${styles.second}`} src='/img/Banner01.png' width='400' height='80' alt="noimg"/>
            </div>
            <div className='absolute z-2 m'>
            <Image className={`${styles.bannerimg} ${styles.third}`} src='/img/Banner.png' width='400' height='80' alt="noimg"/>
            </div>
        </div>
    </div>
    <div className="hidden md:flex mx-3 mt-3 p-4">
        Not member?
        <Link href='/auth/register'>
        <span className= ' text-blue-600'> Create account</span>
        </Link>
    </div>
    </>
  )
  }
