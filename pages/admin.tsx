import React from 'react'
import AdminNavbar from '../components/admin/adminNavbar/AdminNavbar'

const Admin = () => {
  return (
    <div className='flex flex-col gap-10 items-center'>
      <AdminNavbar />
      <span className='text-4xl flex gap-2 text-center text-red-500'>
        <i className='bi bi-exclamation-diamond-fill' />
        This Page is NOT indent for customers
      </span>
    </div>
  )
}

export default Admin