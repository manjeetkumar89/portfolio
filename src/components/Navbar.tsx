import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-red-900 flex justify-between'>
        <Link href={'/'}>
            <div>Portfolio</div>
        </Link>

        <div>
            <Link href={'/'}>Home</Link>
            <Link href={'/projects'}>Projects</Link>
            <Link href={'/skills'}>Skills</Link>
            <Link href={'/contact'}>Contact</Link>
        </div>

        <div>
            <button>Resume</button>
        </div>
    </nav>
  )
}

export default Navbar