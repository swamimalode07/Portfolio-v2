import React, { ReactNode } from 'react'

interface ContainerProps{
    children:ReactNode;
    className?:string;
}

const Container:React.FC<ContainerProps> = ({children,className}) => {
  return (
    <div className=' max-w-360 mx-auto border-l border-r border-[#27272a]'>
      {children}
    </div>
  )
}

export default Container