import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/index.module.css'
import OtpInput from 'react-otp-input';
import Timer from '../../components/Timer';
import Resend from '../../components/Resend';
import { useContext } from 'react';
import {useRouter} from 'next/router'
import { Context } from '../../components/context/CreateContext';
import {PulseLoader} from "react-spinners"
export default function verify() {
  const [stop,setStop]=useState(false)
  const {userdata}=useContext(Context);
  const [inputotp,setInputotp]=useState('')
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)
  const router=useRouter();
  const checkotp=(e)=>{
    e.preventDefault();
    setLoading(true)
    if(inputotp==userdata.code){
      setTimeout(()=>{
        setLoading(false);
        router.push('/auth/success')
        },3000)
    }else{
      setError(true)
      setLoading(false);
    }
  }
  
  return (
    <>
    <div className='flex flex-row justify-between items-center'>
      <div className="m-6 p-4"><Image src='/img/Subtract.png' width="30" height="20"alt="no img"/>
      </div>
    </div>
    <div className='flex w-full h-full '>
      <div className='flex-1 flex flex-col items-center justify-around m-8 space-y-3 h-full'>
        <div className="flex flex-col  items-center lg:my-10">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold">Enter the verification code to continue</div>
            <div className='my-5 font-bold text-gray-400'>
              We sent to {userdata.to_email}.If you don't see it,check your spam
            </div>
            <OtpInput
                value={inputotp}
                onChange={(e)=>{
                  setInputotp(e)
                  setError(false)
                }}
                numInputs={4}
                separator={<span></span>}
                inputStyle={styles.otppin}
               />
            {!stop?
            <div className='my-4 font-bold text-gray-400'>
                 Resend in 00:<Timer stop={stop} setStop={setStop}/>
            </div>:
            <Resend setStop={setStop}/>
            }
             <div className='bg-blue-700 w-full mr-4 lg:w-1/2 flex flex-row justify-center mt-10 p-2 rounded-lg'>
             {loading? <PulseLoader color="white" margin={9} size={13}/> :<button className='w-full bg-blue-700 text-white p-1' disabled={loading}  onClick={checkotp}>Submit</button>}
                </div>
                {error&&<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-2" role="alert">Wrond OTP Please Check!
                </div>}
          </div>
      </div>
        <div className='hidden md:flex flex-1 p-3'>
        <div className='absolute z-2 ml-20'>
            <Image className={`${styles.bannerimg} ${styles.first}`} src='/img/Banner02.png' width='400' height='80' alt="noimg"  />
            </div>
            <div className='absolute z-2 ml-10'>
            <Image className={`${styles.bannerimg} ${styles.second}`} src='/img/Banner01.png' width='400' height='80' alt="noimg"/>
            </div>
            <div className='absolute z-2 m'>
            <Image className={`${styles.bannerimg} ${styles.third}`} src='/img/Banner.png' width='400' height='80' alt="noimg"/>
            </div>
        </div>
      </div>
    </>
  )
}



   
