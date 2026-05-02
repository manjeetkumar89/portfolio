import React from 'react'
import RelaxedText from './RelaxedText'
import { RiArrowRightUpLongLine } from '@remixicon/react'

const Footer = () => {

  const hrefs = {
    github : 'https://github.com/manjeetkumar89',
    linkedin : 'https://www.linkedin.com/in/manjeet-kumar-25a072283',
    twitter : 'https://x.com/ManjeetKum4688',
    email : 'mailto:scit403@gmail.com'
  }

  return (
    <>
      <section className='w-full px-6 md:px-40 py-52  flex flex-col gap-10 items-center'>
        <RelaxedText contents="Project inquiry" tracking='0.5em'/>
        <div className='tracking-tight font-bold text-center font-plus-jakarta-sans text-5xl md:text-7xl mb-5'>Architecting the future?</div>
        <button className='flex items-center gap-4 group cursor-pointer'>
          <span className='font-plus-jakarta-sans text-2xl md:text-3xl font-light border-b border-secondary/40 group-hover:border-secondary py-2'>Initialize Discussion</span>
          <RiArrowRightUpLongLine className='w-8 h-8 group-hover:translate-x-5 transition-all duration-200 cubic-bezier(0.68, -0.55, 0.265, 1.55)' />
        </button>
      </section>
      <section className='w-full px-6 md:px-40 py-15 flex flex-wrap gap-10 justify-between items-center border-t border-secondary/20'>
        <div className='flex flex-col gap-1'>
          <RelaxedText contents='&copy; 2026 the curated developer' />
          <RelaxedText contents='Architectural precision in digital form' additionalClasses='opacity-50' />
        </div>
        <div className='flex gap-6'>
          <a href={hrefs.github} target="_blank" rel="noopener noreferrer">
            <RelaxedText contents='github' />
          </a>
          <a href={hrefs.linkedin} target="_blank" rel="noopener noreferrer">
            <RelaxedText contents='linkedin' />
          </a>
          <a href={hrefs.twitter} target="_blank" rel="noopener noreferrer">
            <RelaxedText contents='twitter' />
          </a>
          <a href={hrefs.email} target="_blank" rel="noopener noreferrer">
            <RelaxedText contents='email' />
          </a>
        </div>
      </section>
    </>
  )
}

export default Footer