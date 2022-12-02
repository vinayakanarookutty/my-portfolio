import React from 'react'
import {PhoneIcon,MapPinIcon,EnvelopeIcon} from '@heroicons/react/20/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  
  subject: string,
  message: string,
};


type Props = {}

export default function ContactMe({}: Props) {

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
  {
   window.location.href=`mailto:vinayaksukhalal@gmail.com?subject=${formData.subject}&body=Hi,My Name is ${formData.name}, ${formData.message} , From ${formData.email}`
  };
  return (
    <div className='h-screen relative flex flex-col  text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center '>
<h3 className='uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

        <div className='flex flex-col space-y-10'>
        <h4 className=' text-2xl font-semibold text-center'>I have got just what you need <span className='decoration-[#f6ff00]/10 underline'>Lets Talk...</span></h4>
       
        <div className='space-y-10'>
            <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='w-7 h-7 text-[#fff200]'/>
            <p className='text-2xl'>+91 9567771549</p>
            </div>

            <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='w-7 h-7 text-[#fff200]'/>
            <p className='text-2xl'>vinayaksukhalal@gmail.com</p>
            </div>



            <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='w-7 h-7 text-[#fff200]'/>
            <p className='text-2xl font-semibold'>Aroor Alappuzha Kerala</p>
            </div>
            
            
            
            
            
            
            </div>
       
       <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2   '>
            <div className='flex space-x-5 justify-center  '>
            <input {...register('name')} placeholder='Name' className='ComponentIn '  type='text'/>
            <input {...register('email')} placeholder='Email' className='ComponentIn' type='email'/>
            </div>

        <input {...register('subject')} placeholder="Subject" className='ComponentIn' type='text'/>
        <textarea {...register('message')} placeholder="Message" className='ComponentIn'   />
        <button className='font-bold bg-[#f7ab0a] py-5 px-10 text-black text-lg rounded-md' type='submit' >Submit</button>
       </form>
       
        </div>

    </div>
  )
}