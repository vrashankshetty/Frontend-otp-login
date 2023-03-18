import React from 'react'

    export const generateotp=()=>{
        const otp=Math.random()*10000;
        if(otp<1000){
        return otp+4000;
        }
        else{
        return otp;
        }
      }

