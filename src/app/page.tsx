"use client"

import Image from 'next/image'
import Link from 'next/link'
import Welcome from '../../public/welcome.png'

export default function WelcomePage() {
  return (
    <div className='h-screen flex flex-col justify-around items-center px-10 bg-white'>
      <div className='space-y-2'>
        <p className='text-center text-4xl font-bold text-gray-700'>MiniGPT</p>
      </div>
      <div className='flex-row justify-center'>
        <Image src={Welcome} alt='welcome-image' width={280} height={280} />
      </div>
      <Link href='/home' className='bg-emerald-600 mx-5 p-4 rounded-2xl text-center text-white font-bold text-2xl'>Empezar</Link>
    </div>
  )
}
