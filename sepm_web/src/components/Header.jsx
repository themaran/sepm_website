import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import MAMCET_logo from '../assets/images/mamcet_logo.jpg'
import user from '../assets/images/user_picture.jpg'
import '../assets/css/header.css'
import { Menu } from './Menu'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import config from '../firebaseConfig';
import { logout, setUser } from '../pages/actions/authActions';
import { child, get, getDatabase, ref } from 'firebase/database';

const Header = () => {
    const name = useSelector((state) => state.auth.name);
    const role = useSelector((state) => state.auth.role);
    const [isAdmin, setAdmin] = useState(true);
    const [isNavActive, setIsNavActive] = useState(false);
    const [quickMenuActive, setQuickMenuActive] = useState(false);
    const dispatch = useDispatch();
    const [unread, setUnread] = useState([{ id: 1, message: 'Semester 5 CGPA Calculated' }]);
  
    const auth = getAuth(config);
    const db = ref(getDatabase(config));
    const signOutUser = () => {
      signOut(auth)
        .then(() => {
          dispatch(logout());
        })
        .catch((error) => {
          // Handle sign-out error
        });
    };

    onAuthStateChanged(auth,(user)=>{
        if(user){
            const userId = user.uid;
            get(child(db, `Users/${userId}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    const name = snapshot.val().name;
                    const role = snapshot.val().role;
                    dispatch(setUser(name, role));
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error.message);
            });
        }
    })
  
    const toggleQuickMenu = () => {
      setQuickMenuActive((prevState) => !prevState);
    };

    const showQuickMenu = () => {
        const quickMenu = document.querySelector('.quick_menu');
        setQuickMenuActive(!quickMenuActive)
    }


    return (
        <>
            <div className='w-screen fixed z-10 pl-5 pr-5 md:pr-32 h-20 grid grid-row-1 grid-cols-2 col-auto bg-white border content-center'>
                <div className='logo_wrapper flex items-center'>
                    <img src={MAMCET_logo} className='w-12' alt='mamcet logo' />
                    <span className='w-44 text-xs font-semibold uppercase'>Department Of Information Technology</span>
                </div>
                <div className='user_account_wrapper grid-cols-1 content-center justify-items-end hidden md:grid'>
                    <div className='flex justify-between items-center col-span-2'>
                        <div className='relative mr-10'>
                            <Link to='/notification' className='relative'>
                                <span className="material-symbols-outlined cursor-pointer w-full h-full mt-2">
                                    notifications
                                </span></Link>
                            {/* {
                                unread.length >= 1 ?
                                <div
                                    className='w-1.5 h-1.5 bg-red-500 absolute top-1 left-4 rounded-3xl'></div> : <></>} */}
                        </div>
                        <div className='flex items-center relative'>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>{name[0]}</Avatar>
                            <div className='ml-2'>
                                <p className='user_name self-center font-medium tracking-tight text-sm text-gray-600'>{name}</p>
                                <div className='flex items-center cursor-pointer' onClick={showQuickMenu}>
                                    <p className='text-gray-600 text-xs'>{role}</p>
                                    <span className="material-symbols-outlined text-base">
                                        keyboard_arrow_right
                                    </span>
                                </div>
                            </div>

                            <div className={`quick_menu w-28 h-20 bg-white border absolute pl-4 pr-2 pt-2 top-11 left-12 ${quickMenuActive ? "" : "hidden"}`}>
                                <ul>
                                    <li><Link className='text-sm' to='/myaccount'>My Account</Link></li>
                                    <li className='mt-2'><button onClick={signOutUser} className='text-sm text-red-500 flex items-center'><span class="mr-2 text-base material-symbols-outlined">
                                        logout
                                    </span> Sign Out</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 justify-items-end content-center md:hidden'>
                    <div className='relative col-span-2'>
                        <Link to='/notification'>
                            <span className="material-symbols-outlined cursor-pointer">
                                notifications
                            </span></Link>
                        {unread.length >= 1 ?
                            <div
                                className='w-1.5 h-1.5 bg-red-500 absolute top-1 left-4 rounded-3xl'></div> : <></>}
                    </div>
                    <span className="material-symbols-outlined cursor-pointer col-span-1" onClick={() => toggleQuickMenu()}>
                        menu
                    </span>
                </div>
                <div className={`mobile_menu md:hidden transition absolute sm:relative top-0 left-0 bottom bg-gray-900 borders w-48 pl-2 pr-2 pt-20 h-screen ${isNavActive ? "block" : "hidden"}`}>
                    <span className="material-symbols-outlined absolute right-5 top-5 text-white cursor-pointer" onClick={() => setIsNavActive(!isNavActive)}>
                        close
                    </span>
                    <ul className="grid grid-cols-1">
                        <li className='grid grid-cols-3 bg-green-400 p-2 mb-8 rounded-sm'>
                            <img src={user} className='w-10 rounded-full' />
                            <div>
                                <p className='user_name self-center font-medium tracking-tight text-sm text-white'>Manikandan</p>
                                <div className='flex items-center cursor-pointer' onClick={showQuickMenu}>
                                    <p className='text-gray-50 text-xs'>Admin</p>
                                    <span className="material-symbols-outlined text-white text-base">
                                        keyboard_arrow_right
                                    </span>
                                </div>
                                <div className={`quick_menu w-28 h-20 pr-2 pt-2 top-11 left-12 ${quickMenuActive ? "" : "hidden"}`}>
                                    <ul>
                                        <li><Link className='text-xs text-white' to='/myaccount'>My Account</Link></li>
                                        <li className='mt-2'><Link className='text-xs text-red-500 flex items-center'><span class="mr-2 text-base material-symbols-outlined">
                                            logout
                                        </span> Sign Out</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <p className='pl-4 font-bold text-base text-gray-50 tracking-tight mt-6'>Dashboard</p>
                    <Link className='menu_link flex text-gray-300 items-center mt-3 text-sm md:text-base hover:bg-gray-600 hover:shadow-outline  p-3 rounded-sm' to='/'><span class="fs-5 me-3 text-xl material-symbols-outlined">
                        home
                    </span> Home</Link>
                    <p className='pl-4 font-bold text-base text-gray-50 tracking-tight mt-6'>Classes</p>
                    <Link className='menu_link flex text-gray-300 items-center mt-3 mb-3 text-sm md:text-base hover:bg-gray-600 hover:shadow-outline  p-3 rounded-sm' to='/classes'>
                        <span className="fs-5 me-3 material-symbols-outlined">
                            groups
                        </span>
                        Classes</Link>
                    {isAdmin ? <>
                        <p className='pl-4 font-bold text-base text-gray-50 tracking-tight mt-6'>Accounts</p> <Link to='/user' className='menu_link text-gray-300 flex items-center mt-3 mb-3 text-sm md:text-base hover:bg-gray-600 hover:shadow-outline  p-3 rounded-sm'><span class="fs-5 me-3 text-xl material-symbols-outlined">
                            group_add
                        </span> Manage Users</Link></> : <></>}


                    <div className='footer absolute bottom-36 text-white text-sm'>
                        <div className='divider d-none d-md-block'></div>
                        <p>&#169; MAMCET 2023</p>
                        <p>All rights served</p>
                    </div>
                </div>
            </div>
            <Menu />
        </>
    )
}



export default Header;