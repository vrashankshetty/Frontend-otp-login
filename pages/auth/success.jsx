import React from 'react'
import Image from 'next/image'
import {HashLoader} from "react-spinners"
export default function success() {
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
    <Image src='/img/Subtract.png' width="30" height="30" alt="noimg"/>
    <div className='text-blue-500 font-extrabold text-center text-xl'>Success!</div>
    <HashLoader color="#0047AB" size={30} />
    </div>
    </>
  )
}
