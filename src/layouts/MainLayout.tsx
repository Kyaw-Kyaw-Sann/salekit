
import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function MainLayout() {
  return (
    <div className='min-h-screen bg-background md:flex'>
        <Sidebar/>
        <div className="min-w-0 flex-1">
            <Navbar/>
            <div className="p-4 sm:p-6 lg:p-8">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default MainLayout