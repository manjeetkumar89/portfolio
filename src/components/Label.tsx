import React from 'react'

const Label = (props : {contents : string}) => {

    const {contents} = props;

  return (
    <div className='flex justify-center items-center max-w-fit px-4 py-1.5 bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] shadow-lg'>
        <span className='w-full h-full uppercase tracking-[0.2em] font-jetbrains-mono text-[0.7em] text-secondary hover:text-primary'>{contents}</span>
    </div>
  )
}

export default Label