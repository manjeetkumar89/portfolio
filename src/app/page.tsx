import React from 'react'
import Label from '../components/Label'
import HeroText from '../components/HeroText'
import Button from '../components/Button'


const background = 'border-b border-white/10 bg-[linear-gradient(to_right,rgba(156,156,156,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(156,156,156,0.1)_1px,transparent_1px)] bg-size-[40px_40px]'

const Home = () => {
  return (
    <div className='relative w-full h-screen'>
      <div className={`md:px-40 px-6 pt-20 pb-4 w-full flex relative z-2  ${background}`}>
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
        <div className='hidden  lg:w-1/3 w-0 lg:flex flex-col gap-6'></div>
      </div>

      <div className='w-full h-screen'></div>
    </div>
  )
}

export default Home