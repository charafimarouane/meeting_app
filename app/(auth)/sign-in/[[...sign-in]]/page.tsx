import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <main className='h-screen w-screen flex justify-center items-center'>
        <SignIn/>
    </main>
  )
}

export default page