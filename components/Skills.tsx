import React from 'react'
import{motion} from 'framer-motion'


type Props = {}

export default function Skills({}: Props) {
  const img:any=["https://cdn-icons-png.flaticon.com/512/919/919825.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EoRJu321RSf8QQZR8XJ2zL7LIDHsQhRfwQ&usqp=CAU","https://assets.website-files.com/60d251a34163cf29e1220806/610ccf8b080e59622903db0e_react_logo.png"
,"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
,"https://img.stackshare.io/service/8158/default_660b7c41c3ba489cb581eec89c04655404258c19.png"
,"https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png"
,"https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/handlebars-js.png?fit=500%2C500&ssl=1"
,"https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"]
  return (
    <div 
    // initial={{opacity:0}}
    // whileInView={{opacity:1}}
    // transition={{duration:1.5}}
    className='h-screen flex  relative flex-col text-center md:text-left xl:flex-row 
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center  '>
        <h3 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='uppercase absolute top-36 tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill for current Proficiency

        </h3>
        <div className='grid grid-cols-3 gap-3'>
         
          {
              img.map((name:any,index:number)=>{
                return  <div className='group relative flex cursor-pointer'>
                  <div className='relative'>
                
                <motion.img
                initial={{x: 200
                ,opacity:0}
                }
                whileInView={{opacity:1,x:0}}
                transition={{duration:1}}
                
                src={name}
                className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
                xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        
                
                />
                 <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-20 top-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text:3xl font-bold text-black opacity-100 z-20'>100%</p>
            </div>
        </div>
                </div>
                </div>
              })



              
          }
          
          
          </div>
   
       
        
        
        </div>
  )
}