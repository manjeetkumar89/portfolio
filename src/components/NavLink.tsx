import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkClasses = ' hover:text-primary py-1.5 transition duration-300 ease-linear ' 
const activeLinkClasses = 'text-primary border-b py-1.5  '

const NavLink = (props : { link: string; content: string, toggleFunction?: () => void }) => {

    const {link, content, toggleFunction} = props;

    const pathname = usePathname();
    
    const isActive = (path : string) => pathname === path;

  return (
    <Link 
        href={link}
        className={isActive(link) ? activeLinkClasses : linkClasses}
        onClick={toggleFunction}
    >
        {content}
    </Link>
  )
}

export default NavLink