'use client'
import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
export default function Profile() {
  const {data:session}=useSession()
  return (
    <div className='grid place-items-center mx-auto container'>
<Image src={session?.user?.image} alt='Profile Image' width={100} height={100} className='!rounded-full'/>
<h2 className='text-3xl font-semibold text-white uppercase'>{session?.user?.name}</h2>
<h2 className='text-3xl font-semibold text-white '>Email:<span>{session?.user?.email}</span></h2>     
    </div>
  )
}
