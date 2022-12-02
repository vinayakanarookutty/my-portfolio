import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
  <motion.div
  initial={{
    opacity:0
  }}
  animate={
    {
      scale:[1,2,2,3,1],
      opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
      borderRadius:["20%","20%","50%","80%","20%"]
    }
  }
  transition={

    
    {
      duration:2.5,
    }
  }
  
  className=' relative flex justify-center items-center'>
    <div className='absolute rounded-full border border-[#333333] h-[200px] w-[200px] mt-72 animate-ping'/>
    <div className='absolute rounded-full border border-[#333333] h-[300px] w-[300px] mt-72  animate-ping'/>
    <div className='absolute rounded-full border border-[#333333] h-[500px] w-[500px] mt-72 animate-ping' />
    <div className='absolute rounded-full border border-[#333333] h-[650px] w-[650px] mt-72 '/>
    <div className='absolute rounded-full border border-[#333333] h-[800px] w-[800px] opacity-20 mt-72 animate-pulse'/>

  </motion.div>
  
  )
}