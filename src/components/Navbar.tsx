'use client'
import { RiCloseLargeLine, RiMenu3Line } from '@remixicon/react'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'

const glassPanel = " bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] shadow-lg "


const Navbar = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setisMenuOpen(!isMenuOpen);
    }

    const navLinks = [
        { link: '/', content: 'Home' },
        { link: '/projects', content: 'Projects' },
        { link: '/skills', content: 'Skills' },
        { link: '/contact', content: 'Contact' },
    ]

  return (
    <nav className={`fixed md:px-40 px-4 w-full flex justify-between py-4 items-center ${glassPanel}`}>
        <Link href={'/'}>
            <div className='uppercase tracking-[0.2em] font-plus-jakarta-sans font-bold text-sm'>Portfolio</div>
        </Link>

        <div className='hidden md:flex gap-12 font-jetbrains-mono tracking-widest uppercase text-[0.7rem] text-secondary'>

            {
                navLinks.map((navLink, index) => (
                    <NavLink key={index} link={navLink.link} content={navLink.content}/>
                ))
            }

        </div>

        <div className=' hidden md:block bg-primary text-neutral py-2 px-6 font-jetbrains-mono text-[10px] tracking-[0.2em] font-bold hover:bg-primary/80 transition duration-300 ease-linear cursor-pointer'>
            <button className='uppercase'>Resume</button>
        </div>


        {/* mobile menu */}

        <div className='absolute top-14 left-0 w-full flex flex-col items-center gap-6 py-6 bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] shadow-lg md:hidden' style={{display: isMenuOpen ? 'flex' : 'none'}}>
           {
                navLinks.map((navLink, index) => (
                    <NavLink key={index} link={navLink.link} content={navLink.content} toggleFunction={toggleMenu}/>
                ))
           }

           <div className='bg-primary text-neutral py-2 px-6 font-jetbrains-mono text-[10px] tracking-[0.2em] font-bold hover:bg-primary/80 transition duration-300 ease-linear cursor-pointer'>
            <button className='uppercase'>Resume</button>
        </div>
        </div>

        {isMenuOpen ? <RiCloseLargeLine className='md:hidden block' onClick={toggleMenu} /> : <RiMenu3Line className='md:hidden block' onClick={toggleMenu} />}
    </nav>
  )
}



export default Navbar