import React from 'react'
import Discover from '../_components/Discover'
import { SidebarTrigger } from '@/components/ui/sidebar'

function page() {
  return (
    <div className='w-full'>
      <div className="absolute top-2 left-2 md:hidden lg:hidden">
        <SidebarTrigger className="bg-black" />
      </div>
      <Discover />
    </div>
  )
}

export default page