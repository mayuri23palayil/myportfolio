import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home =()=>{
    return(
        <div name='home' className=' text-white w-full h-screen bg-[#1c2b43]'>
        
        <div className='max-w-[1000 px] mx-auto ml-9 px-8 flex flex-col justify-center h-full'>
            <p className='text-white text-2xl'>Hello,I am </p>
            <h1 className='text-4xl sm:text-7xl  text-pink-500 font-bold'>Mayuri Palayil</h1>
            <h2 className='text-1.5xl sm:text-3xl text-pink-200 font-bold'>A full-stack developer,Software and data enthusiast</h2>
            <p className='text-white text-justify py-4 max-w-[700px]'>With a strong foundation in both front-end and back-end development, coupled with an understanding of data analytics, I am passionate about exploring how technology and data intersect. My goal is to leverage this intersection to drive meaningful innovations and create impactful solutions that address real-world challenges.I am currently pursuing my studies at Vellore Institute of Technology, Vellore.
            </p>
            <div>
            <Link

to="work"

smooth={true}

duration={500}

> <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-200'>my work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/> 
                </span>
                
                </button>  </Link>
            </div>
        </div>

        </div>
    )

}
export default Home