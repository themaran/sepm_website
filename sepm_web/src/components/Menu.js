import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/menu.css'

export const Menu = () => {
    const [isAdmin, setAdmin] = useState(false);
  return (
    <div className='menu'>
            <Link className='menu_link' to='/'>Home</Link>
            <Link className='menu_link' to='/classes'>Classes</Link>
            { isAdmin ? <Link to='/user' className='menu_link'>Add User</Link> : <></>}

            
            <div className='divider d-none d-md-block'></div>
            <div className='footer d-none d-md-block'>
                <p>&#169; MAMCET 2023</p>
                <p>All rights served</p>
            </div>
    </div>
  )
}
