import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/menu.css'

export const Menu = () => {
    const [isAdmin, setAdmin] = useState(false);
  return (
    <div className='menu'>
            <Link to='/'>Home</Link>
            <Link to='/classes'>Classes</Link>
            { isAdmin ? <Link to='/user'>Add User</Link> : <></>}

            
            <div className='divider d-none d-md-block'></div>
            <div className='footer d-none d-md-block'>
                <p>&#169; MAMCET 2023</p>
                <p>All rights served</p>
            </div>
    </div>
  )
}
