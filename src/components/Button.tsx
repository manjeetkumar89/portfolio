import React from 'react'

const Button = (props : { px: string; py: string; bgColor : string; text: string; textColor : string; hover : boolean; additionalClasses?: string }) => {

    const {
        px,
        py,
        text,
        bgColor,
        textColor, 
        hover,
        additionalClasses
        //clickFunction
    } = props;

  return (
    <button className={`${bgColor} ${px} ${py} ${textColor} uppercase tracking-[0.2em] font-jetbrains-mono text-xs cursor-pointer ${hover ? 'hover:bg-primary/90' : ''} ${additionalClasses || ''} transition duration-300 ease-linear`} >
        {text}
    </button>
  )
}

export default Button