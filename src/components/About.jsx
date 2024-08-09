import React from 'react'
const About =()=>{
    return(
<div name='about' className='w-full h-screen bg-[#1c2b43] text-gray-300'>
  <div className='flex flex-col justify-center w-full h-full'>
    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
      <div className='pb-8 pl-4 ml-9'>
        <p className='text-4xl font-bold inline-block border-b-4 border-pink-300'>About</p>
      </div>
      <div>
    
      </div>
    </div>
    <div className='max-w-[10000px] w-full grid sm:grid-cols-2 ml-9 px-4 gap-8'>
      <div className='text-4xl font-bold'>
        <p>Hi, I am Mayuri. This is my portfolio.</p>
      </div>
      <div>
        <p className='text-justify mr-10'>With a strong foundation in both front-end and back-end development, coupled with an understanding of data analytics, I am passionate about exploring how technology and data intersect. My goal is to leverage this intersection to drive meaningful innovations and create impactful solutions that address real-world challenges.I am currently pursuing my studies at Vellore Institute of Technology, Vellore</p>
      </div>
    </div>
  </div>
</div>


        
    );
};
export default About;
