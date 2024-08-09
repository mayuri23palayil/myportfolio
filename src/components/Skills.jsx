import React from 'react'
import reactt from '../assets/react.png';
import pyth from '../assets/python.png';
import mysq from '../assets/mysqllogo.png';
import jss from '../assets/jslogo.png';
import jav from '../assets/javalogo.png';
import htm from '../assets/html logo.png';
import djang from '../assets/djangologo.png';
import tail from '../assets/csspic.png';
import csss from '../assets/csslogo2.png';
import aws from '../assets/awslogo.png';
import tabl from '../assets/tablogo.png';


const Skills =()=>{

    return (
        <div name='skills' className='w-full h-screen  bg-[#1c2b43] text-gray-300'>
        
            <div className='max-w-[1000px mx-auto p-4 flex flex-col ml-8 justify-center w-full h-full '>
                <div>
                    <p className='text-4xl inline border-b-4 border-pink-600 font-bold '>Skills</p>
                    
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 texr-center py-8'>
                    <div className='shadow-md shadow-[#840c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={jav} alt="java"/>
                        <p className='my-4'>Java</p>
                        
                    </div>
                    <div className='shadow-md shadow-[#840c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={pyth} alt="java"/>
                        <p className='my-4'>Python</p>
                        
                    </div>
                    <div className='shadow-md shadow-[#840c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={htm} alt="java"/>
                        <p className='my-4'>HTML</p>
                        
                    </div>
                    <div className='shadow-md shadow-[#840c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={csss} alt="java"/>
                        <p className='my-4'>CSS</p>
                        
                    </div>
                    <div className='shadow-md shadow-[#840c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tail} alt="java"/>
                        <p className='my-4'>Tailwind CSS</p>
                        
                    </div>
                    <div className='shadow-md shadow-[#840c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={jss} alt="java"/>
                        <p className='my-4'>JavaScript</p>
                        
                    </div>
                    <div className='shadow-md shadow-[#840c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={reactt} alt="java"/>
                        <p className='my-4'>React JS</p>
                        
                    </div>
                    <div className='shadow-md shadow-[#840c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={djang} alt="java"/>
                        <p className='my-4'>Django</p>
                        
                    </div>
                    <div className='shadow-md shadow-[#840c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={mysq} alt="java"/>
                        <p className='my-4'>MySQL</p>
                        
                    </div>
                    <div className='shadow-md shadow-[#840c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={aws} alt="java"/>
                        <p className='my-4'>AWS</p>
                        
                    </div>
                    <div className='shadow-md shadow-[#840c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tabl} alt="java"/>
                        <p className='my-4'>Tableau</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
    
    
}

export default Skills;