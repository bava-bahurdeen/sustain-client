'use client'
import React from 'react'
import {useSession} from 'next-auth/react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
export default function page() {
    const {data:session}=useSession()
if(!session){
    redirect('/')
}
      return (
    <div>

       
   <h1>Welcomee back <span>{session.user?.name}</span></h1>
   <Image src={session.user?.image} alt='account-image' width={60} height={60} className='!rounded-full'/>
    </div>
  )
}
