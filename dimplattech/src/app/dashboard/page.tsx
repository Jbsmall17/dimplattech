"use client"
import BigSpinner from '@/components/BigSpinner'
import ProfileHeader from '@/components/ProfileHeader'
import Sidebar from '@/components/Sidebar'
import { useAuth } from '@/utils/useAuth'
import React from 'react'

export default function page() {
  const isAuthenticated = useAuth()

  if(!isAuthenticated){
    return (
      <div className='h-screen w-screen flex justify-center align-center'>
        <BigSpinner />
      </div>
    )
  }
  return (
    <main className='h-screen flex flex-col overflow-hidden'>
        <ProfileHeader />
        <section className='flex flex-row flex-1'>
            <Sidebar pageName={""} />
            <div>

            </div>
        </section>
    </main>
  )
}
