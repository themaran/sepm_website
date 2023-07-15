import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Semester = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-gray-100 w-full min-h-screen relative pt-28 pl-5 pr-5 sm:pl-64'>

            {/* Head of page */}
            <div className='flex mb-5 items-center'>
                <span class="material-symbols-outlined mr-2 cursor-pointer" onClick={() => navigate(-1)}>
                    keyboard_arrow_left
                </span>
                <h1 className='p-0 m-0 font-extrabold md:text-2xl sm:text-xl text-lg tracking-tight text-gray-800'>Semesters</h1>
            </div>
            <div className='flex justify-center items-center'>
                <h4>Coming soon!</h4>
            </div>
        </div>
    )
}
