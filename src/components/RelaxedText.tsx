import React from 'react'

const RelaxedText = ({ contents , additionalClasses, tracking="0.2em" } : { contents: string; additionalClasses?: string; tracking?: string }) => {
  return (
    <span 
      className={`uppercase font-jetbrains-mono text-[0.7em] text-secondary ${additionalClasses || ''}`}
      style={{ letterSpacing: tracking }}
    >
      {contents}
    </span>
  )
}

export default RelaxedText