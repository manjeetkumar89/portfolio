import React from 'react'
import RelaxedText from './RelaxedText'
import Label from './Label'

const SkillCard = ({ label, title, description, techstack, className }: { label: string; title: string; description: string; techstack: string[]; className?: string }) => {
    return (
        <div className={`p-10 bg-white/3 hover:bg-white/9 border border-secondary/30 hover:border-secondary/60 flex flex-col gap-5 transition duration-400 ${className || ''}`}>
            <RelaxedText
                contents={label}
            />
            <h3 className='text-2xl md:text-3xl font-bold font-plus-jakarta-sans uppercase'>{title}</h3>
            <p className='text-sm text-secondary leading-relaxed'>{description}</p>
            <div className='flex flex-wrap gap-2 mt-0 md:mt-8'>
                {techstack.map((tech: string, index: number) => (
                    <div
                        key={index}
                        className='bg-black/40'
                    >
                        <Label contents={tech} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillCard