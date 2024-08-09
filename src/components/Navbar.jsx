import React, { useState } from 'react'
import logo from '../assets/mepic.jpeg';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f0f4fd] text-blue-900 font-bold'>
            <div>
                <img src={logo} alt="Logo image" style={{ width: '55px' }} />
            </div>


            {/* menu */}
            <div className='hidden md:flex'>
                <ul className=" hidden md:flex">
                    <li>
                        <Link

                            to="home"

                            smooth={true}

                            duration={500}

                        >
                            Home
                        </Link>

                    </li>
                    <li> <Link

to="about"

smooth={true}

duration={500}

>
About
</Link></li>
                    <li> <Link

to="skills"

smooth={true}

duration={500}

>
Skills
</Link></li>
                    <li> <Link

to="work"

smooth={true}

duration={500}

>
Projects
</Link></li>
                    <li> <Link

to="contact"

smooth={true}

duration={500}

>
Contact Me
</Link></li>
                </ul>

            </div>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}

            </div>

            {/* Mobile Menu*/}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen  bg-[#4a5ac0] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}

to="home"

smooth={true}

duration={500}

>
Home
</Link>
                </li>
                <li className='py-6 text-4xl' >
                <Link onClick={handleClick}

to="about"

smooth={true}

duration={500}

>
About
</Link>
                </li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick}

to="skills"

smooth={true}

duration={500}

>
Skills
</Link></li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick}

to="work"

smooth={true}

duration={500}

>
Projects
</Link>
                </li>
                <li className='py-6 text-4xl'> <Link onClick={handleClick}

to="contact"

smooth={true}

duration={500}

>
Contact Me
</Link></li>
            </ul>
            {/* socials icons */}
            <div className=' hidden lg:flex fixed flex-coll top-[35%] left-0'>
                <ul>
                    <li className='w-[160 px] h-[60px] flex justify-between items-center ml-[-77px] hover:ml-[-16px] duration-300'>
                        <a className='flex justify-between items-center w-full text-white bg-blue-900'
                            href='http://www.linkedin.com/in/mayuri04        '>
                            LinkedIn  <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160 px] h-[60px] flex justify-between items-center ml-[-77px] hover:ml-[-16px] duration-300'>
                        <a className='flex justify-between items-center w-full text-white bg-red-600'
                            href='https://drive.google.com/file/d/1CNYMQCuf010iTQj183ALfd7yitrBW4Bm/view?usp=drive_link'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160 px] h-[60px] flex justify-between items-center ml-[-77px] hover:ml-[-16px] duration-300'>
                        <a className='flex justify-between items-center w-full text-white bg-pink-700'
                            href='https://github.com/mayuri23palayil            '>
                            Github  <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160 px] h-[60px] flex justify-between items-center ml-[-77px] hover:ml-[-16px] duration-300'>
                        <a className='flex justify-between items-center w-full text-white bg-green-800'
                            href='https://drive.google.com/file/d/1INpKVIVcQkmyJw_AE3vc3SyBUrLhaIDM/view?usp=sharing'>
                            Resume  <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>




        </div>
    )
}

export default Navbar;

