import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/menu.css'

export const Menu = () => {
  const [isAdmin, setAdmin] = useState(true);
  return (
    <div className='menu z-10 hidden sm:flex flex-col bg-white border w-56 p-3 h-full fixed top-20'>
      <p className='pl-4 font-bold text-base text-gray-600 tracking-tight mt-6'>Dashboard</p>
      <Link className='menu_link flex align-items-center mt-3 text-sm md:text-base hover:bg-blue-100 hover:shadow-outline  p-3 rounded-sm' to='/'><span class="fs-5 me-3 text-xl material-symbols-outlined">
        home
      </span> Home</Link>
      <p className='pl-4 font-bold text-base text-gray-600 tracking-tight mt-6'>Classes</p>
      <Link className='menu_link flex align-items-center mt-3 mb-3 text-sm md:text-base hover:bg-blue-100 hover:shadow-outline  p-3 rounded-sm' to='/classes'>
        <span class="fs-5 me-3 material-symbols-outlined">
          groups
        </span>
        Classes</Link>
      {isAdmin ? <>
        <p className='pl-4 font-bold text-base text-gray-600 tracking-tight mt-6'>Accounts</p> <Link to='/user' className='menu_link flex align-items-center mt-3 mb-3 text-sm md:text-base hover:bg-blue-100 hover:shadow-outline  p-5 rounded-sm'><span class="fs-5 me-3 text-xl material-symbols-outlined">
          group_add
        </span> Manage Users</Link></> : <></>}


      <div className='footer absolute bottom-36'>
        <div className='divider d-none d-md-block'></div>
        <p>&#169; MAMCET 2023</p>
        <p>All rights served</p>
      </div>
    </div>
  )
}
