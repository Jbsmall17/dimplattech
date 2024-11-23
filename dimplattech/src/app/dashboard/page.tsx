import ProfileHeader from '@/components/ProfileHeader'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function page() {
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
