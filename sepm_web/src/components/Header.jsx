import React, { useState } from 'react'
import MAMCET_logo from '../assets/images/mamcet_logo.jpg'
import user from '../assets/images/user_picture.jpg'
import '../assets/css/header.css'
import { Menu } from './Menu'

export const Header = () => {

    const [isNavActive, setIsNavActive] = useState(false);

    return (
        <>
            <div className='w-screen pl-5 pr-5 h-20 grid grid-row-1 grid-cols-2 col-auto bg-gray-50 border content-center'>
                <div className='logo_wrapper flex items-center'>
                    <img src={MAMCET_logo} className='w-12' alt='mamcet logo' />
                    <span className='w-36 text-xs'>Department Of Information Technology</span>
                </div>
                <div className='user_account_wrapper grid-cols-1 content-center justify-items-end hidden sm:grid'>
                    <div className='flex justify-between col-span-1'>
                        <img src={user} className='w-10' alt='user profile' />
                        <p className='user_name self-center text-sm'>Manikandan</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 justify-items-end content-center sm:hidden'>
                    <span class="material-symbols-outlined" onClick={()=>setIsNavActive(!isNavActive)}>
                        menu
                    </span>
                </div>
                <div className={`mobile_menu sm:hidden absolute top-0 left-0 bg-gray-900 bottom bg-gray-50 borders pl-10 pt-20 h-screen ${isNavActive ? "block" : "hidden"}`}>
                    <span class="material-symbols-outlined absolute right-5 top-5 text-white" onClick={()=>setIsNavActive(!isNavActive)}>
                        close
                    </span>
                    <ul>
                        <li className='mb-8 text-sm text-white'>Home</li>
                        <li className='text-sm text-white'>Classes</li>
                    </ul>
                </div>
            </div>
            {/* <Menu /> */}
        </>
    )
}
