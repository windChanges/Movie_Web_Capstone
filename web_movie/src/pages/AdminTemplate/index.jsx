import React from 'react'
import Sidebar from './_components/Sidebar'
import { Outlet } from 'react-router-dom'
const AdminTemplate = () => {
  return (
     <div className="flex">
      <Sidebar />
      <main className="ml-64 p-6 w-full bg-gray-100 min-h-screen">
         <Outlet></Outlet>
      </main>
    </div>
  )
}

export default AdminTemplate