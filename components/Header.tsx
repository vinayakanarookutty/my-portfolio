import React from 'react'
import {SocialIcon} from 'react-social-icons'
import {motion} from 'framer-motion'

function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center'> 
        <motion.div 
        initial={{
          x:-500,
          opacity:0,
          scale:0.5

        }}
        animate={
          {
            x:0,
            opacity:1,
            scale:1

          }
        
        }
        transition=
        {
          {
            duration:1.5,
          }
        }
        className='flex flex-row items-center'>
        {/* SocialIcons */}
        <SocialIcon fgColor='grey' bgColor='transparent' url="https://www.youtube.com/watch?v=urgi2iz9P6U&t=965s" />
        <SocialIcon fgColor='grey' bgColor='transparent' url="https://www.youtube.com/watch?v=urgi2iz9P6U&t=965s" />
        <SocialIcon fgColor='grey' bgColor='transparent' url="https://www.youtube.com/watch?v=urgi2iz9P6U&t=965s" />
        
        </motion.div>


        <motion.div
         initial={{
          x:500,
          opacity:0,
          scale:0.5

        }}
        animate={
          {
            x:0,
            opacity:1,
            scale:1

          }
        
        }
        transition=
        {
          {
            duration:1.5,
          }
        }
        
        className='flex flex-row items-center text-grey-300 cursor-pointer'>
        <SocialIcon
        className='cursor-pointer'
        network='email'
        fgColor='grey'
        bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          get in touch
        </p>

        </motion.div>
        
        
        </header>
  )
}

export default Header