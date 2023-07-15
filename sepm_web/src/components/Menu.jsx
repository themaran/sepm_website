import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../assets/css/menu.css'

export const Menu = () => {
  const [isAdmin, setAdmin] = useState(true);
  const [dropdown, setDropDown] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className='menu z-10 hidden sm:flex flex-col bg-white border w-56 p-3 h-full fixed top-20'>
      <ul>
        <li>
          <p className='pl-4 font-bold text-base text-gray-600 tracking-tight mt-6'>Dashboard</p>
          <Link
            className={`menu_link flex align-items-center mt-3 text-sm md:text-base  hover:border hover:bg-blue-100 ${currentPage == 'home' ? 'bg-blue-100 border border-blue-500' : 'border border-white'} hover:border-blue-500  p-3 rounded-sm`}
            to='/'
            onClick={() => setCurrentPage('home')}
          >
            <span class="fs-5 me-3 text-xl material-symbols-outlined">
              home
            </span> Home</Link>

        </li>
        <li>
          <p className='pl-4 font-bold text-base text-gray-600 tracking-tight mt-6'>Classes</p>
          <Link
            className={`menu_link dropdown_trigger flex flex-col mt-3 transition-all text-sm md:text-base hover:bg-blue-100 ${currentPage == 'classes' ? 'bg-blue-100 border border-blue-500' : 'border border-white '} hover:border-blue-500  p-3 rounded-sm`}
            to='/classes'
            onClick={() => { setCurrentPage('classes'); }}
          >
            <div className='flex items-center'>
              <span class="fs-5 me-3 material-symbols-outlined">
                groups
              </span>
              Classes <span class={`material-symbols-outlined text-lg arrow absolute right-10 ${dropdown ? 'active' : ''}`} onClick={() => setDropDown(!dropdown)}>
                keyboard_arrow_right
              </span>
            </div>
            <div className='dropdown_container'>
              <Link
                className={`menu_link dropdown ${dropdown ? 'active' : ''} flex align-items-center mt-3 transition-all text-sm md:text-sm hover:bg-blue-10 hover:border-blue-100  p-3 rounded-sm`}
                to='/semesters'
                onClick={() => setCurrentPage('semester')}
              >
                <span class="fs-5 me-3 text-sm material-symbols-outlined">
                  school
                </span>
                Semesters</Link>
            </div>
          </Link>


        </li>
        <li>
          {isAdmin ? <>
            <p className='pl-4 font-bold text-base text-gray-600 tracking-tight mt-6'>Accounts</p>
            <Link
              className={`menu_link flex align-items-center mt-3 transition-all text-sm md:text-base hover:bg-blue-100 ${currentPage == 'users' ? 'bg-blue-100 border border-blue-500' : 'border border-white '} hover:border-blue-500  p-3 rounded-sm`}
              to='/users'
              onClick={() => setCurrentPage('users')}
            >
              <span class="fs-5 me-3 material-symbols-outlined">
                group_add
              </span>
              Manage Users</Link></> : <></>}

        </li>
      </ul>
      <div className='footer absolute bottom-36'>
        <div className='divider d-none d-md-block'></div>
        <p>&#169; MAMCET 2023</p>
        <p>All rights served</p>
      </div>
    </div>
  )
}
