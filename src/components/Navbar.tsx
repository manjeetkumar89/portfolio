'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkClasses = ' hover:text-primary py-1.5 transition duration-300 ease-linear ' 
const activeLinkClasses = 'text-primary border-b py-1.5  '
const glassPanel = " bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] shadow-lg "
const Navbar = () => {

    const pathname = usePathname();

    const isActive = (path : string) => pathname === path;

  return (
    <nav className={`fixed px-40 w-full flex justify-between py-4 items-center ${glassPanel}`}>
        <Link href={'/'}>
            <div className='uppercase tracking-[0.2em] font-plus-jakarta-sans font-bold text-sm'>Portfolio</div>
        </Link>

        <div className='flex gap-12 font-jetbrains-mono tracking-widest uppercase text-[0.7rem] text-secondary'>
            <Link href={'/'} className={isActive('/') ? activeLinkClasses : linkClasses}>Home</Link>
            <Link href={'/projects'} className={isActive('/projects') ? activeLinkClasses : linkClasses}>Projects</Link>
            <Link href={'/skills'} className={isActive('/skills') ? activeLinkClasses : linkClasses}>Skills</Link>
            <Link href={'/contact'} className={isActive('/contact') ? activeLinkClasses : linkClasses}>Contact</Link>
        </div>

        <div className='bg-primary text-neutral py-2 px-6 font-jetbrains-mono text-[10px] tracking-[0.2em] font-bold hover:bg-primary/80 transition duration-300 ease-linear cursor-pointer'>
            <button className='uppercase'>Resume</button>
        </div>
    </nav>
  )
}



export default Navbar