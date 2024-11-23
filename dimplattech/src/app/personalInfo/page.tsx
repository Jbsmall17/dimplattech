import AccountSettings from '@/components/AccountSettings'
import ProfileHeader from '@/components/ProfileHeader'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function page() {
  return (
    <main className='md:h-screen flex flex-col overflow-hidden'>
      <ProfileHeader />
      <section className='flex flex-row flex-1'>
        <Sidebar pageName={'personal info'} />
        <AccountSettings />
      </section>
    </main>
  )
}
