import React from 'react'
import Label from '../components/Label'
import HeroText from '../components/HeroText'
import Button from '../components/Button'
import Image from 'next/image'
import RelaxedText from '../components/RelaxedText'

import hero from '../../public/Hero.png'
import liora from '../../public/liora-featured.png'
import coffee from '../../public/coffee1.png'
import { RiArrowRightLine } from '@remixicon/react'


const background = ' bg-[linear-gradient(to_right,rgba(156,156,156,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(156,156,156,0.07)_1px,transparent_1px)] bg-size-[40px_40px] border-b border-secondary/20'

const Home = () => {
  return (
    <div className='relative w-full h-screen'>

      {/* hero section */}
      <section className={`md:px-40 px-6 pt-20 pb-4 w-full flex relative z-2  ${background}`}>
        <div className='py-15 lg:w-2/3 w-full flex flex-col gap-6'>
          <Label contents='available for selected projects' />
          <HeroText />
          <p className='font-plus-jakarta-sans text-lg md:text-xl text-secondary max-w-xl leading-relaxed'>An intentional approach to full-stack engineering. Bridging the gap between architectural rigor and fluid digital experiences.</p>

          <div className='pt-5 flex sm:flex-row flex-col gap-12'>
            <Button px='px-10' py='py-5' bgColor='bg-primary' textColor='text-neutral' text='view showcase' hover={true} additionalClasses='font-bold' />
            <span className='flex items-center justify-center'>
              <Button px='px-0' py='py-3' bgColor='bg-transparent' textColor='text-primary' text='read philosophy' hover={false} additionalClasses='border-b border-secondary hover:border-primary' />
            </span>
          </div>
        </div>
        <div className='relative hidden  lg:w-1/3 w-0 lg:flex flex-col gap-6  overflow-hidden group'>
          <Image src={hero} alt='hero image' width={0} height={0} loading='eager' className='absolute top-1/2 left-0 -translate-y-1/2  w-full aspect-3/4 object-cover grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100' />
        </div>
      </section>

      {/* stats section */}
      <section className='w-full px-6 md:px-40 py-32 '>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 border border-secondary/20'>
            <div className='col-span-1 flex flex-col gap-6 border-b md:border-r border-secondary/20 p-10'>
              <RelaxedText contents={'years deep'} />
              <div className='font-plus-jakarta-sans font-extrabold text-7xl tracking-tight pt-8'>24</div>
              <div className='font-plus-jakarta-sans text-secondary text-sm uppercase font-thin '>synthesizing complexity</div>
            </div>
            <div className='col-span-1 flex flex-col gap-4 border-b md:border-r border-secondary/20 p-10 group'>
              <div className='col-span-1 flex flex-col gap-6'>
                <RelaxedText contents={'repositories'} />
                <div className='font-plus-jakarta-sans font-extrabold text-7xl tracking-tight pt-8 text-tertiary group-hover:text-primary'>10</div>
                <div className='font-plus-jakarta-sans text-secondary text-sm uppercase font-thin '>architecture</div>
              </div>
            </div>
            <div className='col-span-1 md:col-span-2 flex flex-col gap-4 p-10 z-10 relative group'>
              <RelaxedText contents={'architecture'} />
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30.88 30.88" className='fill-white/7 group-hover:fill-white/15 transition w-35 aspect-square absolute bottom-5 right-5' >
                <g>
                  <path d="M23.597,25.972l0.189-2.267l-2.963-8.055h1.645v1.3h0.801v-3.401h-0.801v1.299h-1.939l-1.92-5.216
		c0.207-0.464,0.324-0.97,0.324-1.509c0-1.893-1.412-3.44-3.238-3.688V0h-1.004v4.435c-1.822,0.248-3.237,1.795-3.237,3.688
		c0,0.76,0.229,1.463,0.617,2.053l-1.719,4.672H8.337v-1.299H7.535v3.401h0.803v-1.3h1.721l-2.965,8.055l0.191,2.267L6.181,30.88
		l2.479-4.343l1.783-1.67l4.998-12.791l4.998,12.791l1.781,1.67l2.48,4.343L23.597,25.972z M15.253,10.715
		c-1.428,0-2.586-1.156-2.586-2.584c0-1.427,1.158-2.584,2.586-2.584s2.584,1.157,2.584,2.584
		C17.837,9.559,16.681,10.715,15.253,10.715z"/>
                  <circle cx="15.252" cy="8.168" r="1.273" />
                </g>
              </svg>
              <div className='flex flex-wrap gap-3 align-middle pt-8'>
                <Label contents={'typescript'} />
                <Label contents={'react'} />
                <Label contents={'next.js'} />
                <Label contents={'node'} />
                <Label contents={'Express'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* featured projects section */}
      <section className='w-full px-6 md:px-40 py-32 flex flex-col gap-30 border border-secondary/20'>
        <div className='flex flex-col gap-6'>
          <RelaxedText contents={'case studies'} />
          <div className='flex justify-between'>
            <div className='text-5xl md:text-7xl font-extrabold tracking-tighter font-plus-jakarta-sans uppercase'>Featured Artifacts</div>
            <div className='font-plus-jakarta-sans max-w-xs font-light text-secondary leading-relaxed flex flex-col justify-end'>Work defined by technical precision and architectural rigor.</div>
          </div>
        </div>
        <div className='flex gap-20 items-center'>
          <div className='flex-3/5 border border-secondary/20 overflow-hidden perspective-distant transform-3d'>
            <Image src={liora} alt="featured project" className='w-full object-cover rotate-x-15 rotate-y-16 -translate-z-32 grayscale hover:grayscale-0 hover:scale-105 transition-all ease-in duration-500' />
          </div>
          <div className='flex-2/5 flex flex-col gap-6'>
            <div className='flex items-center gap-6'>
              <Label contents='AI ChatBot'/>
              <RelaxedText contents={'2025 / Live'} />
            </div>
            <div className='text-4xl md:text-5xl font-bold tracking-tighter font-plus-jakarta-sans'>Liora</div>
            <p className='text-lg font-plus-jakarta-sans leading-relaxed text-secondary font-light'>A cutting-edge AI-powered chatbot designed to provide seamless customer support and enhance user engagement.</p>
            <button className='uppercase tracking-[0.2em] font-jetbrains-mono text-[0.7em] flex items-center gap-4 font-extrabold group mt-6 cursor-pointer'>Explore projects <RiArrowRightLine className='w-4 h-4 group-hover:translate-x-5 transition-all duration-200 cubic-bezier(0.68, -0.55, 0.265, 1.55)' /></button>
          </div>
        </div>


        <div className='flex flex-row-reverse gap-20 items-center'>
          <div className='flex-3/5 border border-secondary/20 overflow-hidden perspective-distant transform-3d'>
            <Image src={coffee} alt="featured project coffee" className='w-full object-cover rotate-x-16 rotate-y-15 -translate-z-32 grayscale hover:grayscale-0 hover:scale-105 transition-all ease-in duration-500' />
          </div>
          <div className='flex-2/5 flex flex-col gap-6'>
            <div className='flex items-center gap-6'>
              <Label contents='redesigned'/>
              <RelaxedText contents={'2025 / Live'} />
            </div>
            <div className='text-4xl md:text-5xl font-bold tracking-tighter font-plus-jakarta-sans'>Chamberlain coffee</div>
            <p className='text-lg font-plus-jakarta-sans leading-relaxed text-secondary font-light'>A sleek redesign of the Chamberlain Coffee website, showcasing premium blends, brewing guides, and an enhanced online shopping experience.</p>
            <button className='uppercase tracking-[0.2em] font-jetbrains-mono text-[0.7em] flex items-center gap-4 font-extrabold group mt-6 cursor-pointer'>Explore projects <RiArrowRightLine className='w-4 h-4 group-hover:translate-x-5 transition-all duration-200 cubic-bezier(0.68, -0.55, 0.265, 1.55)' /></button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home