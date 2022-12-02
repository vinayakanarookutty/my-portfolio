import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

export default function Projects({}: Props) {
 const projects:any=[1,2,3,4,5]
  
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative grid place-items-center'>
        <h3 className='uppercase absolute top-24 left-[580px] tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      
<div className='relative flex flex-col justify-center  w-full z-20 snap-center snap-mandatory  h-screen'>

    <div className='relative w-screen overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-30 flex'>
      {projects.map((data:any,i:any)=>(
        <div className='w-screen flex-shrink-0 snap-center space-y-5 p-10 flex flex-col items-center justify-center'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBcr-Zx-gAJLPeK2dvrBzNLnUYlbK4gzy5A&usqp=CAU'/>
        </div>

      ))}

    </div>

       

</div>
    <div className='absolute top-30 w-full  bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12 z-10'/>

        </motion.div>
  )
}