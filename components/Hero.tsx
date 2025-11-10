"use client"
import React, { useState } from 'react'
import Image from 'next/image'
export default function Hero() {
    const [nav,setNav] = useState()


  return (
    <div className='bg-red-500 justify-center p-3.5'>
      <Image src="/assets/1.jpeg" alt="jaha"  height={10} width={10}/>
      
    </div>
  )
}
