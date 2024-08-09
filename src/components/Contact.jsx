import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-[#1c2b43] flex justify-center items-center p-4'>

        <form method='POST' action="https://getform.io/f/zaxdxwza" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact </p>
                <p className='text-gray-300 text-l py-4'>Get in touch with me -mayuri.palayil@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name'  name='name'/>
            <input  className='bg-[#ccd6f6] my-4 p-2 ' type="email" placeholder='Email'  name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message"  rows="10" placeholder='Message' ></textarea>
            <button className='text-white boreder-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Get in touch</button>
    
        </form>
    </div>
  )
}

export default Contact