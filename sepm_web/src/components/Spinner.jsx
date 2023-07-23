import React from 'react'
import '../assets/css/Spinner.css'

export const Spinner = () => {
    return (
        <>
            <div className='flex justify-center items-center mt-28'>
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-14 w-14"></div>
            </div >
        </>
    )
}
