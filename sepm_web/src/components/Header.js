import React from 'react'
import MAMCET_logo from '../assets/images/mamcet_logo.jpg'
import user from '../assets/images/user_picture.jpg'
import '../assets/css/header.css'

export const Header = () => {
    return (
        <div className='header row'>
            <div className='logo_wrapper col-6 col-sm-3 col-md-3'>
                <div className='logo_container'>
                    <img src={MAMCET_logo} className='img-fluid' alt='MAMCET Logo' />
                </div>
                <div className='logo_text'>
                    <h3>Department Of<br /> Information Technology</h3>
                </div>
            </div>
            <div className='user_account_wrapper d-none d-md-flex col-2'>
                <p className='line'></p>
                <div className='user_profile_pic'>
                    <img src={user} className='img-fluid' alt='user profile' />
                </div>
                <span className='user_name'>Manikandan</span>
            </div>
        </div>
    )
}
